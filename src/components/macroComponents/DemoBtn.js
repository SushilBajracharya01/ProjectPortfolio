import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

export const DemoBtn = (props) => {
    const {href} = props;
    return (
        <a className="Button" href={href} target="_blank" rel="noopener noreferrer">
            <span className="mx-2"><FontAwesomeIcon icon={faDesktop} /></span>
            Demo
        </a>
    )
}
