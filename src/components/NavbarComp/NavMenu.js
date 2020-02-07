import React from 'react';


import NavBtn from './NavBtn';
import ResumeBtn from './ResumeBtn';
import { faHome, faUniversity, faUser, faTools, faLaptopCode, faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons';




const NavMenu = () => {
    return (
        <nav className="NavBar">
            <NavBtn href="" navItem="HOME" navIcon={faHome}/>
            <NavBtn href="../About" navItem="ABOUT" navIcon={faUser} />
            <NavBtn href="../Skills" navItem="SKILLS" navIcon={faTools} />
            <NavBtn href="../Education" navItem="EDUCATION" navIcon={faUniversity} />
            <NavBtn href="../Project" navItem="PROJECT" navIcon={faLaptopCode} />
            <ResumeBtn navIcon={faFile} />
            <NavBtn href="../Contact" navItem="CONTACT" navIcon={faEnvelope} />
        </nav>
    )
}

export default NavMenu;