import React from 'react';
import styled from 'styled-components';


import NavBtn from './NavBtn';
import ResumeBtn from './ResumeBtn';
import { faHome, faUniversity, faUser, faTools, faLaptopCode, faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const NavBar = styled.nav`
    list-style-type: none;
`;


const NavMenu = () => {
    return (
        <NavBar>
            <NavBtn href="" navItem="HOME" navIcon={faHome}/>
            <NavBtn href="../About" navItem="ABOUT" navIcon={faUser} />
            <NavBtn href="../Skills" navItem="SKILLS" navIcon={faTools} />
            <NavBtn href="../Education" navItem="EDUCATION" navIcon={faUniversity} />
            <NavBtn href="../Project" navItem="PROJECT" navIcon={faLaptopCode} />
            <ResumeBtn href="https://drive.google.com/file/d/163-Bl8t_ShhwPUdyr0Jf66OWbn4dbI-q/view?usp=sharing" navItem="RESUME" navIcon={faFile} />
            <NavBtn href="../Contact" navItem="CONTACT" navIcon={faEnvelope} />
        </NavBar>
    )
}

export default NavMenu;