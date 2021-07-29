import React, {Fragment} from 'react';
import MaterialImage from "./materialImage";
import Integrator from "./integrator";
import MaterialTooltip from "./materialTooltip";

export default class calendarTop extends React.Component {
    integrator = new Integrator();
    characterRarity = "4";
    weaponRarity = "5";

    createResetInfo = () => {
        const { day, config : { resetDay } } = this.props;

        if ( day === resetDay) {
            return (
                <div className='Reset' key={'ResetDay'}>
                    Incoming Reset Day!
                </div>
            );
        }
    }

    createMaterialImages = (type, day, rarity) => {
        //Get list of materials as array
        const materialNames = this.integrator.getMaterialsListByDay(type, day, rarity);
        let materialImages = [];

        materialNames.forEach(materialName => {
            //Get list of materials as objects
            const material = this.integrator.getMaterialData(materialName),
                materialLocation = this.integrator.getMaterialLocation(type, materialName),
                dataId = `calendarTop_${material.name}`;

            materialImages.push(
                <Fragment key={`${dataId}_wrapper`}>
                    <MaterialImage material={material} dataFor={dataId} key={dataId} />
                    <MaterialTooltip material={material} location={materialLocation} targetId={dataId} key={`${dataId}_tooltip`} />
                </Fragment>
            )
        });

        return materialImages;
    }

    render () {
        const { day } = this.props;

        return (
            <div className="CalendarTop">
                <div className="day">{day}</div>
                <div className="container">
                    { this.createMaterialImages('character', day, this.characterRarity) }
                </div>
                <div className="container">
                    { this.createMaterialImages('weapon', day, this.weaponRarity) }
                </div>
                {this.createResetInfo()}
            </div>
        );
    }
}