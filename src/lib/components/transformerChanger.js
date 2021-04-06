import React from "react";

export default class TransformerChanger extends React.Component {
    generateTransformerDayItems = () => {
        let {calendarDays, stateManager} = this.props;
        let outputDays = [];

        calendarDays.forEach(day => {
            outputDays.push(
                <div className='transformerDay'
                     onClick={() => stateManager.updateUserConfig({transformerDay: day})}
                     key={`transformer${day}`}
                >
                    {day}
                </div>)
        });
        return outputDays;
    }

    render() {

        return (
            <div className='topLevel'>
                <div>Set Transformer</div>
                <div className='subLevel'>
                    {this.generateTransformerDayItems()}
                </div>
            </div>
        );
    }
}