import React from 'react';
import classes from './SmallCard.css';

const smallCard = (props) => {
    return (
        <div className={classes.smallCard}>
            {props.children}
        </div>
    );
}

export default smallCard;