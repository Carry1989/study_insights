import React from 'react';
import classes from './Row.css';

const row = (props) => {
    return (
        <div className={classes.row}>
            {props.children}
        </div>
    );
}

export default row; 