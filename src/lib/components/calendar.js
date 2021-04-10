import React from 'react';
import CalendarItem from "./calendarItem";

export default class Calendar extends React.Component {
    generateCalendarItems = () => {
        const {displayOrder, config, userConfig} = this.props;

        let calendarItems = [];
        displayOrder.forEach(date => {
            calendarItems.push(<CalendarItem date={date} config={config} userConfig={userConfig} key={date.getDay()}/>)
        });
        return calendarItems;
    }

    render () {
        return (<div className="Calendar">
            {this.generateCalendarItems()}
        </div>);
    }
}