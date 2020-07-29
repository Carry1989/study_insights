import React from 'react';
import classes from './Picture.css';

const picture = (props) => {
    return (
        <div className={classes.User}>
            <img src={props.user} alt="user" className={classes.Img} />
            <p className={classes.Name}>{props.name}</p>
        </div>
    );
}

export default picture;