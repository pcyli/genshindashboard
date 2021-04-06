import React from 'react';
import genshin from "genshin-db";

export default class CharacterTracker extends React.Component {
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
            newConfig.splice(newConfig.indexOf(characterName), 1);
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

        return (
            <li>
                <div>Character tracker</div>
                {this.generateCharacterItems(characterNames)}
            </li>
        );
    }
}