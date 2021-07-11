import React from "react";
import ReactTooltip from "react-tooltip";

export default class MaterialTooltip extends React.Component {
    render () {
        const { material, targetId } = this.props,
            domain = material.domainofmastery || material.domainofforgery,
            imgSrc = `img/domains/${domain.replace(/ /g, '_').toLowerCase()}.png`;

        return (
                <ReactTooltip id={targetId}
                    place="bottom" type="dark" effect="solid"
                >
                    <div>
                        <img src={imgSrc} alt={domain} />
                    </div>
                    {material.name} Series @ {domain}
                </ReactTooltip>

        )
    }
}