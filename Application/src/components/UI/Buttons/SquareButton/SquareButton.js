import React from 'react';
import classes from './SquareButton.css';
import svg from '../../../../assets/sprite.svg';

const squareButton = (props) => (
    <button className={classes.squareButton} onClick={props.onClick}>
        {props.icon ? <svg className={classes.squareButton__icon}>
            <use xlinkHref={svg + "#" + props.icon}></use>
        </svg> : null}

        {props.title}
    </button>
);

export default squareButton;