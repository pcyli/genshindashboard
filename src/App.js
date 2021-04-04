import React, { useState, useEffect } from 'react';
import Calendar from "./lib/components/calendar";
import CharacterTracker from "./lib/components/characterTracker";
import StateTools from "./lib/components/stateManager";
import config from './lib/data/config.json';
import codes from './lib/data/codes.json';
import './lib/css/App.css';
import './lib/css/days.css';


export default function App () {
    let {calendarDays, checkInURL, codesURL} = config,
        currentDay = (new Date()).getDay(),
        displayOrder = calendarDays.slice(currentDay, calendarDays.length).concat(calendarDays.slice(0, currentDay));

    let stateManager = StateTools();

    const [userConfig, setUserConfig] = useState(stateManager.loadUserConfig());

    useEffect(() => {
        stateManager.setUserConfig(userConfig);
    }, [userConfig, stateManager])

    let generateTransformerDayItems = days => {
        let ulDays = [];
        days.forEach(day => {
            ulDays.push(
                <ul className='transformer'
                    onClick={() => stateManager.updateUserConfig(setUserConfig, userConfig, {transformerDay: day} )}
                    key={`transformer${day}`}>
                    {day}
                </ul>)
        });
        return ulDays;
    }

    let generateCodeItems = codes => {
        let ulCodes = [];

        codes.forEach(code => {
            ulCodes.push(
                <ul>{code}</ul>
            );
        })

        return ulCodes;
    }



    return (
        <div className="App">
            <Calendar displayOrder={displayOrder} userConfig={userConfig} />
            <div className="Sidebar">
                <ul>
                    <li><a href={checkInURL}>Check In</a></li>
                    <li>Events</li>
                    <li>
                        <a href={codesURL}>Codes</a>
                        {generateCodeItems(codes)}
                    </li>
                    <li>
                        <div>Set Transformer</div>
                        {generateTransformerDayItems(calendarDays)}
                    </li>
                    <CharacterTracker />
                    <li>Build</li>
                    <li>Calculator</li>
                </ul>
            </div>
        </div>
    );
}