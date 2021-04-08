import sidebarMenu from "./sidebarMenu";

export default class TransformerChanger extends sidebarMenu {

    createTransformerDayItems = () => {
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
        return this.createMenu(
                    'Set Transformer',
                    this.createTransformerDayItems()
                );
    }
}