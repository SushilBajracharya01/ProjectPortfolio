import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ResumeBtn = (props) => {
    const { href, navIcon, navItem } = props;
    return (
        <li>
            <a href={href} className='NavBtn text ' target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={navIcon} /><span className="d-none d-md-block">{navItem}</span>
            </a>
        </li>
    )
}

export default ResumeBtn;