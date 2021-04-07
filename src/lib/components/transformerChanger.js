import React from "react";

export default class TransformerChanger extends React.Component {
    generateTransformerDayItems = () => {
        const {calendarDays, stateManager} = this.props;
        let outputDays = [];
        const {transformerDay} = stateManager.getUserConfig();

        calendarDays.forEach(day => {
            const isSelected = transformerDay === day;
            outputDays.push(
                <div className={`transformerDay ${isSelected && 'selected'}`}
                     onClick={() => stateManager.updateUserConfig({transformerDay: day})}
                     key={`transformer${day}`}
                >
                    {isSelected && <div className='primogem'/> }
                    {day}
                </div>)
        });
        return outputDays;
    }

    render() {
        return (
            <>
                <div className='topLevel'>
                    Set Transformer
                </div>
                <div className='subLevel'>
                    {this.generateTransformerDayItems()}
                </div>
            </>
        );
    }
}