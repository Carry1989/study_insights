import React from 'react';
import classes from './Menu.css';
import Picture from '../Picture/Picture';
import NavigationItems from '../NavigationItems/NavigationItems';
import user from '../../../assets/images/user.jpg';

const menu = (props) => (
    <nav className={classes.Menu}>
        <Picture user={user} name="Denis Gorianin" />
        <NavigationItems />
        <div className={classes.Legal}>
            &copy; 2019 by Study Insights. All rights reserved.
        </div>
    </nav>
);

export default menu;