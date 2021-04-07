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

    render () {
        const { day } = this.props;

        const createMaterialImages = (type) => {
            const queryHandler = this.getQueryHandler(type),
                materialNames = queryHandler(day, {matchCategories: true});
            let materialImages = [];

            materialNames.forEach(materialName => {
                const material = queryHandler(materialName);
                materialImages.push(<MaterialImage material={material} key={material.name} />)
            });

            return materialImages;
        }

        return <div className={["CalendarTop", day].join(' ')}>
            <div className="day">{day}</div>
            <div className="container">
                { createMaterialImages('talent') }
            </div>
            <div className="container">
                { createMaterialImages('weapon') }
            </div>
        </div>;
    }
}