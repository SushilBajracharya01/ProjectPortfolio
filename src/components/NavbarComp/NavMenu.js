import React from 'react';
import styled from 'styled-components';


import NavBtn from './NavBtn';
import { faHome, faUniversity, faUser, faTools, faLaptopCode, faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const NavBar = styled.nav`
    list-style-type: none;
    margin-top: 40%;
`;


const NavMenu = () => {
    return (
        <NavBar>
            <NavBtn href="" navItem="HOME" navIcon={faHome}/>
            <NavBtn href="../About" navItem="ABOUT" navIcon={faUser} />
            <NavBtn href="../Skills" navItem="SKILLS" navIcon={faTools} />
            <NavBtn href="../Education" navItem="EDUCATION" navIcon={faUniversity} />
            <NavBtn href="../Project" navItem="PROJECT" navIcon={faLaptopCode} />
            <NavBtn href="../Resume" navItem="RESUME" navIcon={faFile} />
            <NavBtn href="../Contact" navItem="CONTACT" navIcon={faEnvelope} />
        </NavBar>
    )
}

export default NavMenu;