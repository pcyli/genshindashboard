import genshin from "genshin-db";
import sidebarMenu from "./sidebarMenu";

export default class CharacterTracker extends sidebarMenu {
    removeFromArray (array, remove) {
        array.splice(array.indexOf(remove), 1);
    }

    getQueryHandler (type) {
        switch (type) {
            case 'talent':
                return genshin.talentmaterialtypes;
            case 'character':
                return genshin.characters;
            default:
                throw (new Error('getQueryHandler: No type specified'));
        }
    }

    toggleCharacterTracking = characterName => {
        const stateManager = this.props.stateManager,
            { trackedCharacters } = stateManager.getUserConfig();
        let newConfig;

        if (trackedCharacters.includes(characterName)) {
            newConfig = [...trackedCharacters];
            this.removeFromArray(newConfig, characterName);
        } else {
            newConfig = [...trackedCharacters, characterName];
        }

        stateManager.updateUserConfig({trackedCharacters : newConfig});
    }

    generateCharacterItems = () => {
        const characterNames = this.getQueryHandler('character')('names', {matchCategories: true});
        const { trackedCharacters } = this.props.stateManager.getUserConfig();
        let outputCharacters = [];

        this.removeFromArray(characterNames, 'Aether');
        this.removeFromArray(characterNames, 'Lumine');

        characterNames.forEach(characterName => {
            let isTracked = trackedCharacters.includes(characterName);

            outputCharacters.push(
                <div
                    className={`characterTracker ${isTracked && 'selected'}`}
                    onClick={ () => { this.toggleCharacterTracking(characterName); } }
                    key = {characterName}
                >
                    {isTracked && <div className='primogem'/> }
                    {characterName}
                </div>
            );
        });

        return outputCharacters;
    }

    render () {
        return this.createMenu(
                    'Character Tracker',
                    this.generateCharacterItems()
                );
    }
}