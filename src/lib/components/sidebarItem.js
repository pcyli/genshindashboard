import React from 'react';

export default class SidebarItem extends React.Component {

    render () {
        let {text, handler} = this.props;
        return <div className='topLevel'
                    onClick={handler}
                >
                    {text}
                </div>;
    }
}