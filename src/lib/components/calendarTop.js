import React from 'react';
import MaterialImage from "./materialImage";
import genshin from "genshin-db";

export default class calendarTop extends React.Component {
    getQueryHandler (type) {
        switch (type) {
            case 'talent':
                return genshin.talentmaterialtypes;
            case 'weapon':
                return genshin.weaponmaterialtypes;
            default:
                throw (new Error('getQueryHandler: No type specified'));
        }
    }

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
        const queryHandler = this.getQueryHandler(type),
            materialNames = queryHandler(day, {matchCategories: true});
        let materialImages = [];

        materialNames.forEach(materialName => {
            const material = queryHandler(materialName);
            materialImages.push(<MaterialImage material={material} key={material.name} />)
        });

        return materialImages;
    }

    render () {
        const { day } = this.props;

        return <div className="CalendarTop">
            <div className="day">{day}</div>
            <div className="container">
                { this.createMaterialImages('talent', day) }
            </div>
            <div className="container">
                { this.createMaterialImages('weapon', day) }
            </div>
            {this.createResetInfo()}
        </div>;
    }
}