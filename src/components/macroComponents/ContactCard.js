import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './ContactCard.css';

export const ContactCard = ( props ) => {
    const { href, Icon } = props;
    return (
        <div className="col-12 col-lg-4">
            <div className="contactCard text-center">
                <FontAwesomeIcon icon={Icon} className="contactIcon" /> 
                <br/>
                <a href={href} target="_blank" rel="noopener noreferrer"  className="">
                    {href}
                </a>
            </div>
        </div>
    )
}