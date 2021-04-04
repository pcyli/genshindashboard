import React from 'react';

export default class MaterialImage extends React.Component {
    createMaterialImage (material) {
        let highMaterialName = material['5starname'] || material['4starname'] ;

        if (!highMaterialName) {
            highMaterialName = material.name;
        }

        return 'img/items/Item_' + this.convertURISafe(highMaterialName) + '.png';
    }
    convertURISafe (input) {
        return escape(input.replace(/["']/g, '').split(' ').join('_'));
    }

    render () {
        let material = this.props.material;

        return <div className='MaterialImage'>
            <img src={this.createMaterialImage(material)} alt={material.name} />
        </div>
    }
}