import React from 'react';
import MaterialImage from "./materialImage";
import Integrator from "./integrator";
import MaterialTooltip from "./materialTooltip";

export default class calendarTop extends React.Component {
    integrator = new Integrator();

    createResetInfo = () => {
        const { day, config : { resetDay } } = this.props;

        if ( day === resetDay) {
            return (
                <div className='Reset'>
                    Incoming Reset Day!
                </div>
            );
        }
    }

    createMaterialImages = (type, day) => {
        const materialNames = this.integrator.getMaterialsListByDay(type, day);
        let materialImages = [];

        materialNames.forEach(materialName => {
            const material = this.integrator.getMaterialData(type, materialName),
                dataId = `calendarTop_${material.name}`;
            materialImages.push(
                <>
                    <MaterialImage material={material} dataFor={dataId} key={dataId} />
                    <MaterialTooltip material={material} targetId={dataId} key={`${dataId}_tooltip`} />
                </>
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
                    { this.createMaterialImages('character', day) }
                </div>
                <div className="container">
                    { this.createMaterialImages('weapon', day) }
                </div>
                {this.createResetInfo()}
            </div>
        );
    }
}