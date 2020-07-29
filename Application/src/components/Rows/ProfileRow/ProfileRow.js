import React from 'react';
import classes from './ProfileRow.css';

const profileRow = (props) => {
    return (
        <div className={classes.profile__row}>
            <span className={classes.profile__row__column}>{props.columnName}</span>
            <div className={classes.colValue}>
                {props.columnValue}
            </div>
        </div>
    );
}

export default profileRow;