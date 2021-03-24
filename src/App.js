import React from 'react';
import CalendarItem from './lib/components/calendarItem';
import './lib/css/App.css'

function App() {
  return (
    <div className="App">
        <div className="Calendar">
            <CalendarItem day={"Monday"} />
            <CalendarItem day={"Tuesday"} />
            <CalendarItem day={"Wednesday"} />
            <CalendarItem day={"Thursday"} />
            <CalendarItem day={"Friday"} />
            <CalendarItem day={"Saturday"} />
            <CalendarItem day={"Sunday"} />
        </div>
        <div className="Sidebar">
            Check In
            Events
            Codes

            Character tracker
            Build

            Calculator
        </div>
    </div>
  );
}

export default App;
