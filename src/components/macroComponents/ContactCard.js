import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './ContactCard.css';

export const ContactCard = ( props ) => {
    const { href, Icon, link, title } = props;
    return (
        <div className="col-12 col-lg-3">
            <div className="contactCard text-center">
                <a href={href} target="_blank" rel="noopener noreferrer" title={title}>
                   <FontAwesomeIcon icon={Icon} className="contactIcon" /> 
                   <p className="text gLink">{link}</p>
                </a>
            </div>
        </div>
    )
}