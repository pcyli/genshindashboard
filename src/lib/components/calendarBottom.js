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

    createEntityImage = (type, rarity) => {
        const {day, userConfig} = this.props;
        const dayMaterials = this.integrator.getMaterialsListByDay(type, day),
            dayEntities2DArray = dayMaterials.map(
                material => this.integrator.getEntitiesListByMaterial(type, material)
            ),
            dayEntities = [].concat(...dayEntities2DArray);
        let entities = [];

        if (!userConfig[type]) debugger;

        userConfig[type].forEach(entityName => {
            if (dayEntities.includes(entityName)) {
                let entity = this.integrator.getData(type, entityName);
                let material = this.integrator.getEntityAscendMaterial(type, entity, rarity);

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

    render() {
        return (
            <div className="CalendarBottom">
                {this.createTransformerImage()}
                {this.createSpiralAbyssImage()}
                {this.createEntityImage('character', 4)}
                {this.createEntityImage('weapon', 5)}
            </div>
        );
    }
}