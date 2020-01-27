import React from 'react';
import styled from 'styled-components';


import NavBtn from './NavBtn';


const NavBar = styled.nav`
    list-style-type: none;
    margin-top: 40%;
`;


const NavMenu = () => {
    return (
        <NavBar>
            <NavBtn href="" navItem="HOME" />
            <NavBtn href="../About" navItem="ABOUT" />
            <NavBtn href="../Skills" navItem="SKILLS" />
            <NavBtn href="../Education" navItem="EDUCATION" />
            <NavBtn href="../Project" navItem="PROJECT" />
            <NavBtn href="../Resume" navItem="RESUME" />
            <NavBtn href="../Contact" navItem="CONTACT" />
        </NavBar>
    )
}

export default NavMenu;