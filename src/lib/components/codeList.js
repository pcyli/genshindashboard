import React from 'react';
import SidebarItem from "./sidebarItem";
import codes from "../data/codes.json";

export default class CodeList extends React.Component {
    copyToClipboard = targetElement => {
        targetElement.select();
        targetElement.setSelectionRange(0, 99999);

        document.execCommand("copy");
    }

    generateCodeItems = codes => {
        let outputCodes = [];

        codes.forEach(code => {
            outputCodes.push(
                <input className='code'
                    key={code}
                    onClick={ (e) => this.copyToClipboard((e.target)) }
                    value={code}
                    readOnly
                />
            );
        })

        return outputCodes;
    }

    render () {
        const { url } = this.props;

        return (
            <>
                <SidebarItem text={'Codes'} handler={() => {window.open(url);}} />
                <div className='subLevel'>
                    {this.generateCodeItems(codes)}
                </div>
            </>
        );
    }
}