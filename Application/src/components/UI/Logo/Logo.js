import React from 'react';
import classes from './Logo.css';
import logo from '../../../assets/images/logo.png';

const Logo = () => {
    return (
        <div className={classes.Container}>
            <img alt="Logo" src={logo} className={classes.Image} />
        </div>
    );
};

export default Logo;