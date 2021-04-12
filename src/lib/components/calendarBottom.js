import React from 'react';
import MaterialImage from "./materialImage";
import genshin from "genshin-db";
import EntityImage from "./entityImage";

export default class CalendarBottom extends React.Component {
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

    createTransformerImage = () => {
        const {day, userConfig} = this.props;
        if (day === userConfig.transformerDay) {
            return <MaterialImage material={{name: 'Parametric Transformer'}}/>;
        }
    }

    createSpiralAbyssImage = () => {
        const {date, config : { spiralAbyssResetDays }} = this.props,
            calendarDate = date.getDate();

        if (spiralAbyssResetDays.includes(calendarDate)) {
            return <EntityImage imageSrc='img/domains/spiral_abyss.png'
                                classNames='SpiralAbyss'
                                entityName='SpiralAbyss'
                    />;
        }
    }

    createCharacterImage = () => {
        const {day, userConfig} = this.props,
        dayMaterials = this.getQueryHandler('talent')(day, {matchCategories: true}),
        dayCharacters2D = dayMaterials.map(
                                material => this.getQueryHandler('character')(material, {matchCategories: true})
                            ),
        dayCharacters = [].concat(...dayCharacters2D);
        let characters = [];

        userConfig.trackedCharacters.forEach(characterName => {
            if (dayCharacters.includes(characterName)) {
                let character = this.getQueryHandler('character')(characterName);

                characters.push(
                    <div className='CharacterIcon' key={`calBotCharIcon${characterName}`}>
                        <img src={character.images.icon} alt={characterName}/>
                    </div>
                    );
            }
        });

        return characters;
    }

    render() {
        return (
            <div className="CalendarBottom">
                {this.createTransformerImage()}
                {this.createSpiralAbyssImage()}
                {this.createCharacterImage()}
            </div>
        );
    }
}