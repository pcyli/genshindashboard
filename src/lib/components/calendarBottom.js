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
        const integrator = this.integrator;
        const dayMaterials = integrator.getMaterialsListByDay(type, day, rarity),
            dayEntities2DArray = dayMaterials.map(
                material => integrator.getEntitiesListByMaterial(type, material)
            ),
            dayEntities = [].concat(...dayEntities2DArray);

         return userConfig[type].filter(entityName => dayEntities.includes(entityName))
                .map(entityName => {
                    let entity = integrator.getData(type, entityName);
                    let material = integrator.getEntityAscendMaterial(type, entity, rarity);

                    return (
                        <div className={'CharacterIcon'} key={`calBotCharIcon${entityName}`}>
                        <img src={entity.images.icon} alt={entityName}/>
                        <MaterialImage material={material} key={material.name} />
                        </div>
                    );
                });
    }

    render() {
        return (
            <div className="CalendarBottom">
                {this.createTransformerImage()}
                {this.createSpiralAbyssImage()}
                {this.createEntityImage('character', "4")}
                {this.createEntityImage('weapon', "5")}
            </div>
        );
    }
}