import React from 'react';
import codes from "../data/codes.json";
import CharacterTracker from "./characterTracker";
import TransformerChanger from "./transformerChanger";
import SidebarItem from "./sidebarItem";

export default class Sidebar extends React.Component {
    generateCodeItems = codes => {
        let outputCodes = [];

        codes.forEach(code => {
            outputCodes.push(
                <div className='code'
                     key={code}
                >
                    {code}
                </div>
            );
        })

        return outputCodes;
    }

    render() {
        const {calendarDays, checkInURL, codesURL, webEventURL, buildsURL} = this.props.config;
        const {stateManager} = this.props;

        return (
        <div className="Sidebar">
            <SidebarItem text={'Check In'} handler={() => {window.open(checkInURL);}} />
            <SidebarItem text={'Web Event'} handler={() => {window.open(webEventURL);}} />
            <SidebarItem text={'Codes'} handler={() => {window.open(codesURL);}} />
            <div className='subLevel'>
                {this.generateCodeItems(codes)}
            </div>

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