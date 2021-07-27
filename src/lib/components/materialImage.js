import EntityImage from "./entityImage";

export default class MaterialImage extends EntityImage {
    createMaterialURL (material) {
        if (material.images) {
            return material.images.fandom || material.images.redirect;
        } else {
            return `img/items/Item_${this.convertURISafe(material.name)}.png`;
        }
    }

    render () {
        const { material, classNames, dataFor } = this.props;
        let classes = [];

        if (classNames) {
            classes = Array.isArray(classNames) ? classNames : [classNames];
        }

        return this.createEntityImage(
            this.createMaterialURL(material),
            ['MaterialImage', ...classes],
            material.name,
            dataFor
        );
    }
}