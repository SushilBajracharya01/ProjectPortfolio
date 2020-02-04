import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const NavBtn = (props) => {
    const { href, navIcon, navItem } = props;
    return (
        <li>
            <NavLink to={href} exact={true} className='NavBtn text' activeClassName='activeNavBtn'>
                <span className="mx-2"><FontAwesomeIcon icon={navIcon} /></span>{navItem}
            </NavLink>
        </li>
    )
}

export default NavBtn;