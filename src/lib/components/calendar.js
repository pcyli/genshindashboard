import React from 'react';
import CalendarItem from "./calendarItem";

export default class Calendar extends React.Component {
    generateCalendarItems = (days, userConfig) => {
        let calendarItems = [];
        days.forEach(day => {
            calendarItems.push(<CalendarItem day={day} userConfig={userConfig} key={day}/>)
        });
        return calendarItems;
    }

    render () {
        let {displayOrder, userConfig} = this.props;

        return (<div className="Calendar">
            {this.generateCalendarItems(displayOrder, userConfig)}
        </div>);
    }
}