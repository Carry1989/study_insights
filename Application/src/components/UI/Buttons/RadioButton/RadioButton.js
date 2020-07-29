import React from 'react';
import classes from './RadioButton.css';

const radioButton = (props) => (
    <div className={classes.RadioGroup}>
        <input type="radio" id={props.id}
            onChange={props.action}
            value={props.value}
            className={classes.RadioInput}
            checked={props.ch}
            name={props.name} />
        <label htmlFor={props.id} className={classes.RadioLabel}>
            <span className={classes.RadioButton}></span>
            {props.text}
        </label>
    </div>
);

export default radioButton;