import React from 'react';
import CalendarTop from "./calendarTop";
import CalendarBottom from "./calendarBottom";

export default class CalendarItem extends React.Component {
    render () {
        const {date, config, userConfig} = this.props;
        const day = config.calendarDays[date.getDay()]


        return (
            <div className={['CalendarItem', day].join(' ')}>
                <div className="frame"> </div>
                <CalendarTop day={day} config={config} />
                <CalendarBottom day={day} date={date} config={config} userConfig={userConfig} />
            </div>
        );
    };
}