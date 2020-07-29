import React from 'react';
import classes from '../CheckArrow/CheckArrow.css';

const CheckItem = (props) => {
    return (
        <div className={classes.Container}>
            <label className={classes.container}>
                {props.title}
                <input type="checkbox" onChange={props.action} value={props.value} />
                <span className={classes.checkmark}></span>
            </label>
        </div>
    );
};

export default CheckItem;