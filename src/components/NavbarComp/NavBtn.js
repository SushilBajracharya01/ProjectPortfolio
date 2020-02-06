import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const NavBtn = (props) => {
    const { href, navIcon, navItem } = props;
    return (
        <li>
            <NavLink to={href} exact={true} className='NavBtn text ' activeClassName='activeNavBtn'>
                <FontAwesomeIcon icon={navIcon} /><span className="d-none d-md-block">{navItem}</span>
            </NavLink>
        </li>
    )
}

export default NavBtn;