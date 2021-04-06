import React from 'react';
import genshin from "genshin-db";

export default class CharacterTracker extends React.Component {
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
        let stateManager = this.props.stateManager,
            trackedCharacters = stateManager.getUserConfig().trackedCharacters,
            newConfig;

        if (trackedCharacters.includes(characterName)) {
            newConfig = [...trackedCharacters];
            this.removeFromArray(newConfig, characterName);
        } else {
            newConfig = [...trackedCharacters, characterName];
        }

        stateManager.updateUserConfig({trackedCharacters : newConfig});
    }

    generateCharacterItems = characterNames => {
        let ulCharacters = [];
        let userConfig = this.props.stateManager.getUserConfig().trackedCharacters;

        characterNames.forEach(characterName => {
            ulCharacters.push(
                <ul
                    className='characterTracker'
                    onClick={ () => { this.toggleCharacterTracking(characterName); } }
                    key = {characterName}
                >
                    {userConfig.includes(characterName) && '> '}{characterName}
                </ul>
            );
        })

        return ulCharacters;
    }

    render () {
        let characterNames = this.getQueryHandler('character')('names', {matchCategories: true});
        this.removeFromArray(characterNames, 'Aether');
        this.removeFromArray(characterNames, 'Lumine');

        return (
            <li>
                <div>Character tracker</div>
                {this.generateCharacterItems(characterNames)}
            </li>
        );
    }
}