import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export const CodeBtn = (props) => {
    const { href } = props;
    return (
        <a className="Button" href={href} target="_blank" rel="noopener noreferrer">
            <span className="mx-md-2 mx-4"><FontAwesomeIcon icon={faGithub} /></span>
            Code
        </a>
    )
}
