import React from 'react';
import classes from './LargeCard.css';

const largeCard = (props) => {
    return (
        <div className={classes.largeCard}>
            {props.children}
        </div>
    );
}

export default largeCard;