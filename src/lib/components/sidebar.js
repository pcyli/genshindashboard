import React from 'react';
import CharacterTracker from "./characterTracker";
import TransformerChanger from "./transformerChanger";
import SidebarItem from "./sidebarItem";
import CodeList from "./codeList";
import WeaponTracker from "./weaponTracker";

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

            <SidebarItem text={'Builds'} handler={() => {window.open(buildsURL);}}/>

            <div className='divider'> </div>

            <CharacterTracker stateManager={stateManager} />
            <WeaponTracker stateManager={stateManager} />
            <TransformerChanger stateManager={stateManager} calendarDays={calendarDays} />

            <div className='divider'> </div>

            <SidebarItem text={'Calculator'} />

        </div>
        );
    }
}