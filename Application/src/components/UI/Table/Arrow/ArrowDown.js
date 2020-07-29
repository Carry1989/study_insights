import React from 'react';
import classes from './Arrow.css';

const ArrowDown = (props) => {
    let css = [classes.Arrow, classes.Down];
    return (
        <div className={css.join(' ')} onClick={props.action}></div>
    );
};

export default ArrowDown;