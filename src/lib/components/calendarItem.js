import React from 'react';
import CalendarTop from "./calendarTop";
import CalendarBottom from "./calendarBottom";

export default class CalendarItem extends React.Component {
    render () {
        let {day, config} = this.props;

        return (
            <div className="CalendarItem">
                <CalendarTop day={day} />
                <CalendarBottom day={day} config={config} />
            </div>
        );
    };
}