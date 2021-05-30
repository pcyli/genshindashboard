import SidebarMenu from "./sidebarMenu";
import Integrator from "./integrator";

export default class Tracker extends SidebarMenu {
    constructor(props) {
        super(props);

        this.integrator = new Integrator();
    }

    removeFromArray (array, remove) {
        array.splice(array.indexOf(remove), 1);
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
        const trackedEntities = stateManager.getUserConfig()[trackedEntitiesProperty];
        let output = [];

        displayedRarities.forEach(rarity => {
            let entityNames = this.integrator.getData(entityType, rarity, {matchCategories: true}),
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
                debugger;
                output.push(
                    (new SidebarMenu()).createMenu(
                        <img src = { this.integrator.getRarityData(rarity) }
                             alt = { rarity }
                        />,
                        outputEntities
                    )
                );
            }
        });

        return output;
    }

    render () {
        return (<></>);
    }
}