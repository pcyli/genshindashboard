import React from 'react';
import MaterialImage from "./materialImage";
import genshin from "genshin-db";

export default class calendarTop extends React.Component {
    getTalentMaterialTypes (query) {
        return genshin.talentmaterialtypes( query, { matchCategories: true });
    }
    getWeaponMaterialTypes (query) {
        return genshin.weaponmaterialtypes( query, { matchCategories: true });
    }
    render () {
        let day = this.props.day;
        let talentMaterials = this.getTalentMaterialTypes(day);
        let weaponMaterials = this.getWeaponMaterialTypes(day);

        let createMaterialImages = materials => {
            let materialImages = [];
            materials.forEach(material => {materialImages.push(<MaterialImage material={material} />)})

            return materialImages;
        }

        return <div className="CalendarTop">
            <div className="day">{this.props.day}</div>
            { createMaterialImages(talentMaterials) }
            { createMaterialImages(weaponMaterials) }
        </div>;
    }
}