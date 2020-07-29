import React from 'react';
import classes from './Arrow.css';

const ArrowUp = (props) => {
    let css = [classes.Arrow, classes.Up];
    return (
        <div className={css.join(' ')} onClick={props.action}></div>
    );
};

export default ArrowUp;