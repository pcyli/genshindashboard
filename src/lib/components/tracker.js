import genshin from "genshin-db";
import SidebarMenu from "./sidebarMenu";

export default class Tracker extends SidebarMenu {
    removeFromArray (array, remove) {
        array.splice(array.indexOf(remove), 1);
    }

    getQueryHandler (type) {
        switch (type) {
            case 'talent':
                return genshin.talentmaterialtypes;
            case 'character':
                return genshin.characters;
            case 'weapon':
                return genshin.weapons;
            case 'rarity':
                return genshin.rarity;
            default:
                throw (new Error('getQueryHandler: No type specified'));
        }
    }


    toggleTracking = (entityName, trackedEntitiesProperty) => {
        const stateManager = this.props.stateManager,
            trackedEntities  = stateManager.getUserConfig()[trackedEntitiesProperty];
        let newConfig, newConfigObject = {};

        if (trackedEntities.includes(entityName)) {
            newConfig = [...trackedEntities];
            this.removeFromArray(newConfig, entityName);
        } else {
            newConfig = [...trackedEntities, entityName];
        }

        newConfigObject[trackedEntitiesProperty] = newConfig;

        stateManager.updateUserConfig(newConfigObject);
    }

    generateItems = (entityType, trackedEntitiesProperty) => {
        const {stateManager, displayedRarities, ignoredEntities} = this.props;
        const queryHandler = this.getQueryHandler(entityType);
        const trackedEntities = stateManager.getUserConfig()[trackedEntitiesProperty];
        let output = [];

        displayedRarities.forEach(rarity => {
            let entityNames = queryHandler(rarity, {matchCategories: true}),
                outputEntities = [];

            if (entityNames) {
                entityNames.forEach(entityName => {
                    if (ignoredEntities && ignoredEntities.includes(entityName)) return;
                    let isTracked = trackedEntities.includes(entityName);

                    outputEntities.push(
                        <div
                            className={`tracker ${isTracked && 'selected'}`}
                            onClick={() => {
                                this.toggleTracking(entityName, trackedEntitiesProperty);
                            }}
                            key={entityName}
                        >
                            {isTracked && <div className='primogem'/>}
                            {entityName}
                        </div>
                    );
                });
                output.push((new SidebarMenu()).createMenu(rarity, outputEntities));
            }
        });
        return output;
    }

    render () {
        return (<></>);
    }
}