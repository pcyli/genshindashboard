import React from "react";
import ReactTooltip from "react-tooltip";

export default class MaterialTooltip extends React.Component {
    render () {
        try {
            const {material, location, targetId} = this.props,
                domain = location || material.domainofmastery || material.domainofforgery || material.dropdomain.replace(/Domain of ([^:]*): /g, ''),
                imgSrc = `img/domains/${domain.replace(/ /g, '_').toLowerCase()}.png`;

            return (
                <ReactTooltip id={targetId}
                              place="bottom" type="dark" effect="solid"
                >
                    <div>
                        <img src={imgSrc} alt={domain}/>
                    </div>
                    {material.name} Series @ {domain}
                </ReactTooltip>

            );
        } catch (e) {
            return (<div>{e.name}</div>);
        }
    }
}