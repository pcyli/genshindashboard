import React from 'react';

export default class sidebarMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 'showSubLevel' : true };
    }

    toggleOpen = () => {
        this.setState({'showSubLevel' : !this.state.showSubLevel });
    }

    createMenu = (topLevelText, subLevelItems) => {
        const subLevelContent = this.state.showSubLevel && (
            <div className='subLevel'>
                { subLevelItems }
            </div>
        );
        return (
            <>
                <div className='topLevel' onClick={ this.toggleOpen }>
                    { topLevelText }
                </div>
                { subLevelContent }
            </>
        );
    }
}