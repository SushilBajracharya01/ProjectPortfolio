import React from 'react'
import { NavLink } from 'react-router-dom';


const NavBtn = (props) => {
    return (
        <li>
            <NavLink to={props.href} exact={true} className='NavBtn text' activeClassName='activeNavBtn'>{props.navItem}</NavLink>
        </li>
    )
}

export default NavBtn;