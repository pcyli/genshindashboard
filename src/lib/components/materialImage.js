import EntityImage from "./entityImage";

export default class MaterialImage extends EntityImage {
    createMaterialURL (material) {
        let highMaterialName = material['5starname'] || material['4starname'] ;

        if (!highMaterialName) {
            highMaterialName = material.name;
        }

        return `img/items/Item_${this.convertURISafe(highMaterialName)}.png`;
    }

    render () {
        const { material, classNames } = this.props;
        let classes = [];

        if (classNames) {
            classes = Array.isArray(classNames) ? classNames : [classNames];
        }

        return this.createEntityImage(
            this.createMaterialURL(material),
            ['MaterialImage', ...classes],
            material.name
        );
    }
}