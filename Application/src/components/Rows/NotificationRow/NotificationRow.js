import React from 'react';
import classes from './NotificationRow.css';

const notificationRow = (props) => {
    return (
        <div className={classes.row}>
            <div>
                <div className={classes.row__sender}>
                    <span> {props.sender} </span>
                </div>
            </div>

            <div>
                <div className={classes.row__message}>
                    <span className={classes.row__subject}>{props.subject}</span>
                    <span>{props.message}</span>
                </div>
            </div>

            <div><div className={classes.row__unread__symbol} /></div>

            <div>
                <div className={classes.row__time}>
                    <span className={classes.row__time__text}>Posted on</span>
                    <span>{props.date}</span>
                </div>
            </div>
        </div>
    );
}

export default notificationRow;