import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import svg from '../../../assets/sprite.svg';

const navItems = (props) => {
    let items = (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/dashboard">
                <svg className={classes.Icon}>
                    <use xlinkHref={svg + "#icon-gauge"}></use>
                </svg>
                <span>Dashboard</span>
            </NavigationItem>

            <NavigationItem link="/courses/current">
                <svg className={classes.Icon}>
                    <use xlinkHref={svg + "#icon-graduation-cap"}></use>
                </svg>
                <span>Courses</span>
            </NavigationItem>

            <NavigationItem link="/progress/currentGrades">
                <svg className={classes.Icon}>
                    <use xlinkHref={svg + "#icon-line-graph"}></use>
                </svg>
                <span>Progress</span>
            </NavigationItem>

            <NavigationItem link="/notifications">
                <svg className={classes.Icon}>
                    <use xlinkHref={svg + "#icon-bell"}></use>
                </svg>
                <span>Notifications</span>
            </NavigationItem>

            <NavigationItem link="/profile">
                <svg className={classes.Icon}>
                    <use xlinkHref={svg + "#icon-user"}></use>
                </svg>
                <span>Profile</span>
            </NavigationItem>
        </ul>
    );

    // if(!props.isAuthenticated){
    //     items=null;
    // }

    return items;
}

export default navItems;