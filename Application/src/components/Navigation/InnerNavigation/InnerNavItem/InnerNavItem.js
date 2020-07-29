import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './InnerNavItem.css';

const navItem = (props) => (
    <li className={classes.InnerNavItem}>
        <NavLink to={props.link}
            activeClassName={classes.active}
            className={classes.Link}>
            {props.children}
        </NavLink>
    </li>
);

export default navItem;