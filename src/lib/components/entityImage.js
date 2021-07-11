import React from 'react';

export default class EntityImage extends React.Component {

    convertURISafe (input) {
        return escape(input.replace(/["']/g, '').split(' ').join('_'));
    }

    createEntityImage (imageSrc, classNames, entityName, dataFor) {
        const classNameString = Array.isArray(classNames) ? classNames.join(' ') : classNames;

        return (
            <div className={classNameString} data-tip="" data-for={dataFor}>
                <img src={imageSrc} alt={entityName} />
            </div>
        );
    }

    render() {
        const {imageSrc, classNames, entityName} = this.props;

        return this.createEntityImage(imageSrc, classNames, entityName);
    }
}