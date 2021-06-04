import React from 'react';
import MaterialImage from "./materialImage";
import EntityImage from "./entityImage";
import Integrator from "./integrator";

export default class CalendarBottom extends React.Component {
    constructor(props) {
        super(props);

        this.integrator = new Integrator();
    }

    createTransformerImage = () => {
        const {day, userConfig} = this.props;
        if (day === userConfig.transformerDay) {
            return <MaterialImage material={{name: 'Parametric Transformer'}}
                                  classNames={'transformer'}
                    />;
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

    createEntityImage = (type) => {
        const {day, userConfig} = this.props,
            entityDictionary = {
                'character' :  {
                    material : 'talent',
                    propName : 'talentmaterialtype'
                },
                'weapon' : {
                    material : 'material',
                    propName : 'weaponmaterialtype'
                }
            },
            dayMaterials = this.integrator.getData(entityDictionary[type].material, day, 'all'),
            dayEntities2D = dayMaterials.map(
                material => this.integrator.getData(type, material, 'all')
            ),
            dayEntities = [].concat(...dayEntities2D);
        let entities = [];

        if (!userConfig[type]) debugger;

        userConfig[type].forEach(entityName => {
            if (dayEntities.includes(entityName)) {
                let entity = this.integrator.getData(type, entityName);
                let material = this.integrator.getData(
                                    entityDictionary[type].material,
                                    entity[entityDictionary[type].propName]
                                );

                if (!material) debugger;

                entities.push(
                    <div className={'CharacterIcon'} key={`calBotCharIcon${entityName}`}>
                        <img src={entity.images.icon} alt={entityName}/>
                        <MaterialImage material={material} key={material.name} />
                    </div>
                );
            }
        });

        return entities;
    }

    createCharacterImage = () => {
        const {day, userConfig} = this.props,
        dayMaterials = this.integrator.getData('talent', day, 'all'),
        dayCharacters2D = dayMaterials.map(
                                material => this.integrator.getData('character', material, 'all')
                            ),
        dayCharacters = [].concat(...dayCharacters2D);
        let characters = [];

        userConfig.trackedCharacters.forEach(characterName => {
            if (dayCharacters.includes(characterName)) {
                let character = this.integrator.getData('character', characterName);
                let material = this.integrator.getData('talent', character.talentmaterialtype);

                characters.push(
                    <div className='CharacterIcon' key={`calBotCharIcon${characterName}`}>
                        <img src={character.images.icon} alt={characterName}/>
                        <MaterialImage material={material} key={material.name} />
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
                {this.createEntityImage('character')}
                {this.createEntityImage('weapon')}
            </div>
        );
    }
}