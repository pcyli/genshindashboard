import React from 'react';
import Calendar from "./lib/components/calendar";
import Sidebar from "./lib/components/sidebar";
import StateManager from "./lib/components/stateManager";
import config from './lib/data/config.json';

import './lib/css/App.css';
import './lib/css/days.css';


export default function App () {
    let {calendarDays} = config,
        currentDay = (new Date()).getDay(),
        displayOrder = calendarDays.slice(currentDay, calendarDays.length).concat(calendarDays.slice(0, currentDay));

    let stateManager = StateManager();

    let userConfig = stateManager.getUserConfig();

    return (
        <div className="App">
            <Calendar displayOrder={displayOrder} userConfig={userConfig} />
            <Sidebar userConfig={userConfig} config={config} stateManager={stateManager}/>
        </div>
    );
}