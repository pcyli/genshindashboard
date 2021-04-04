import React from 'react';
import genshin from "genshin-db";

export default class CharacterTracker extends React.Component {
    generateCharacterItems = characters => {
        let ulCharacters = [];

        characters.forEach(character => {
            ulCharacters.push(<ul>{character}</ul>)
        })

        return ulCharacters;
    }

    render () {
        let query = genshin.characters;
        let characters = query('names', {matchCategories: true});


        return (
            <li>
                <div>Character tracker</div>
                {this.generateCharacterItems(characters)}
            </li>
        );
    }
}