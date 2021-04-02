import React from 'react';
import CalendarTop from "./calendarTop";

export default class CalendarItem extends React.Component {
    render () {
        let day = this.props.day;

        return (
            <div className="CalendarItem">
                <CalendarTop day={day} />
                <div className="CalendarBottom">bottom</div>
            </div>
        );
    };
}