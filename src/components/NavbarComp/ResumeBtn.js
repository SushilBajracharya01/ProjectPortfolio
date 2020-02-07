import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ResumeBtn = (props) => {
    const { navIcon } = props;
    return (
        <li>
            <a href='https://drive.google.com/file/d/1ELwqCp0VpYWvHmO4XPAS69ATKObbbmL6/view?usp=sharing' className='NavBtn text ' target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={navIcon} /><span className="d-none d-md-block">RESUME</span>
            </a>
        </li>
    )
}

export default ResumeBtn;