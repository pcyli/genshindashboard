import React from 'react';
import CalendarItem from './lib/components/calendarItem';
import './lib/css/App.css'

function App() {
  let calendarDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      currentDay = (new Date()).getDay(),
      displayOrder;

    displayOrder = calendarDays.slice(currentDay, calendarDays.length).concat(calendarDays.slice(0, currentDay));

    let generateCalendarItems = items => {
        let calendarItems = [];
        items.forEach(item => {calendarItems.push(<CalendarItem day={item} />)});
        return calendarItems;
    }

  return (
    <div className="App">
        <div className="Calendar">
            { generateCalendarItems(displayOrder) }
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
