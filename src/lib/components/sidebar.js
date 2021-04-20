import React from 'react';
import CharacterTracker from "./characterTracker";
import TransformerChanger from "./transformerChanger";
import SidebarItem from "./sidebarItem";
import CodeList from "./codeList";

export default class Sidebar extends React.Component {
    render() {
        const {calendarDays, checkInURL, codesURL, webEventURL, buildsURL} = this.props.config;
        const {stateManager} = this.props;

        return (
        <div className="Sidebar">
            <SidebarItem text={'Check In'} handler={() => {window.open(checkInURL);}} />
            <SidebarItem text={'Web Event'} handler={() => {window.open(webEventURL);}} />
            <CodeList url={codesURL} />

            <div className='divider'> </div>

            <TransformerChanger stateManager={stateManager} calendarDays={calendarDays} />
            <CharacterTracker stateManager={stateManager} />

            <div className='divider'> </div>

            <SidebarItem text={'Build'} handler={() => {window.open(buildsURL);}}/>
            <SidebarItem text={'Calculator'} />
        </div>
        );
    }
}