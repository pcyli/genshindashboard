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
        let day = this.props.day;

        let createMaterialImages = (type) => {
            let queryHandler,
                materialNames,
                materialImages = [];

            queryHandler = this.getQueryHandler(type);
            materialNames = queryHandler(day, {matchCategories: true});

            materialNames.forEach(materialName => {
                let material = queryHandler(materialName);
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