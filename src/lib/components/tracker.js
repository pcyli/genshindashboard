import SidebarMenu from "./sidebarMenu";
import Integrator from "./integrator";

export default class Tracker extends SidebarMenu {
    integrator = new Integrator();

    removeFromArray (array, remove) {
        array.splice(array.indexOf(remove), 1);
    }

    toggleTracking = (entityName, trackedEntitiesProperty) => {
        const stateManager = this.props.stateManager,
            trackedEntities  = stateManager.getUserConfig(trackedEntitiesProperty);
        let newConfig,
            newConfigObject = {};

        if (trackedEntities.length && trackedEntities.includes(entityName)) {
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
        const trackedEntities = stateManager.getUserConfig(trackedEntitiesProperty);
        let output = [];

        displayedRarities.forEach(rarity => {
            let entityNames = this.integrator.getData(entityType, rarity, 'all'),
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

                output.push(
                    <SidebarMenu
                        topLevelText = {<img src = { this.integrator.getRarityImage(rarity) }
                                             alt = { rarity }
                                        />}
                        subLevelItems = { outputEntities }
                        />
                );
            }
        });

        return output;
    }

    render () {
        return (<></>);
    }
}