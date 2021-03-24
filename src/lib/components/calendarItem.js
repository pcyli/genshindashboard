import React from 'react';

export default class CalendarItem extends React.Component {
    render () {
        return (
            <div className="CalendarItem">
                <div className="CalendarTop">{this.props.day}</div>
                <div className="CalendarBottom">bottom</div>
            </div>
        );
    };
}