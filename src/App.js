import React from 'react';
import Calendar from "./lib/components/calendar";
import Sidebar from "./lib/components/sidebar";
import StateManager from "./lib/components/stateManager";
import config from './lib/data/config.json';

import './lib/css/App.css';
import './lib/css/days.css';


export default function App () {

    const addDays = function(startDate, days) {
        let date = new Date(startDate.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }

    const currentDay = new Date();
    let displayOrder = [];

    for (let i = 0; i < 7; ++i) {
        displayOrder.push(addDays(currentDay,i));
    }

    const stateManager = StateManager(),
          userConfig   = stateManager.getUserConfig();

    return (
        <div className="App">
            <Calendar displayOrder={displayOrder} userConfig={userConfig} config={config} />
            <Sidebar userConfig={userConfig} config={config} stateManager={stateManager}/>
        </div>
    );
}