import React from 'react';

export default class SidebarMenu extends React.Component {
    state = { 'showSubLevel' : true };

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

    render () {
        const { topLevelText, subLevelItems } = this.props;

        return this.createMenu(topLevelText, subLevelItems);
    }
}