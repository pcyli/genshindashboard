import genshin from "genshin-db";
import sidebarMenu from "./sidebarMenu";

export default class Tracker extends sidebarMenu {
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
        const entityNames = this.getQueryHandler(entityType)('names', {matchCategories: true});
        const trackedEntities = this.props.stateManager.getUserConfig()[trackedEntitiesProperty];
        let outputCharacters = [];

        this.removeFromArray(entityNames, 'Aether');
        this.removeFromArray(entityNames, 'Lumine');

        entityNames.forEach(entityName => {
            if (!trackedEntities) debugger;
            let isTracked = trackedEntities.includes(entityName);

            outputCharacters.push(
                <div
                    className={`${trackedEntitiesProperty}Tracker ${isTracked && 'selected'}`}
                    onClick={ () => { this.toggleTracking(entityName, trackedEntitiesProperty); } }
                    key = {entityName}
                >
                    {isTracked && <div className='primogem'/> }
                    {entityName}
                </div>
            );
        });

        return outputCharacters;
    }

    render () {
        return (<></>);
    }
}