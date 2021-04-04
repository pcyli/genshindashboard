import React from 'react';
import MaterialImage from "./materialImage";

export default class CalendarBottom extends React.Component {
    createTransformerImage = () => {
        let {day, config} = this.props;
        if (day === config.transformerDay) {
            return <MaterialImage material={{name: 'Parametric Transformer'}} />;
        }
    }

    render() {

        return (
            <div className="CalendarBottom">
                {this.createTransformerImage()}
            </div>
        );
    }
}