import React from 'react';
import CalendarTop from "./calendarTop";
import CalendarBottom from "./calendarBottom";

export default class CalendarItem extends React.Component {
    render () {
        const {day, userConfig} = this.props;

        return (
            <div className="CalendarItem">
                <div className="frame"> </div>
                <CalendarTop day={day} />
                <CalendarBottom day={day} config={userConfig} />
            </div>
        );
    };
}