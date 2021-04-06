import React from 'react';
import CalendarTop from "./calendarTop";
import CalendarBottom from "./calendarBottom";

export default class CalendarItem extends React.Component {
    render () {
        let {day, userConfig} = this.props;

        return (
            <div className="CalendarItem">
                <div className="frame">
                    <div className="corner top left"> </div>
                    <div className="corner top right"> </div>
                    <div className="corner bottom left"> </div>
                    <div className="corner bottom right"> </div>
                </div>
                <CalendarTop day={day} />
                <CalendarBottom day={day} config={userConfig} />
            </div>
        );
    };
}