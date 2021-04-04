import React, { useState } from 'react';
import CalendarItem from './lib/components/calendarItem';

import config from './lib/config/config.json'
import './lib/css/App.css'
import './lib/css/days.css'


export default function App () {
    let {calendarDays, checkInURL} = config,
        currentDay = (new Date()).getDay(),
        displayOrder = calendarDays.slice(currentDay, calendarDays.length).concat(calendarDays.slice(0, currentDay));

    const [userConfig, setUserConfig] = useState({
        trackedCharacters : [],
        transformerDay : ''
    });

    let generateCalendarItems = days => {
        let calendarItems = [];
        days.forEach(day => {
            calendarItems.push(<CalendarItem day={day} config={userConfig} key={day}/>)
        });
        return calendarItems;
    }

    let ulCalendarDays = days => {
        let ulDays = [];
        days.forEach(day => {
            ulDays.push(<ul onClick={() => setUserConfig({transformerDay: day} )}>{day}</ul>)
        });
        return ulDays;
    }

    return (
        <div className="App">
            <div className="Calendar">
                {generateCalendarItems(displayOrder, config)}
            </div>
            <div className="Sidebar">
                <ul>
                    <li><a href={checkInURL}>Check In</a></li>
                    <li>Events</li>
                    <li>Codes</li>
                    <li>
                        <div>Set Transformer</div>
                        {ulCalendarDays(calendarDays)}
                    </li>
                    <li>Character tracker</li>
                    <li>Build</li>
                    <li>Calculator</li>
                </ul>
            </div>
        </div>
    );
}