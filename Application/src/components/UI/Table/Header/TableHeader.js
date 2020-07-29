import React, { Component } from 'react';
import classes from './TableHeader.css';
import ArrowUp from '../Arrow/ArrowUp';
import ArrowDown from '../Arrow/ArrowDown';

class TableHeader extends Component {
    state = {
        arrowUp: false,
        sortFunctionDown: false
    };

    changeArrow = () => {
        if (this.state.sortFunctionDown) {
            this.props.actionDown();
        } else {
            this.props.actionUp();
        }

        this.setState(prevState => {
            return {
                arrowUp: !prevState.arrowUp,
                sortFunctionDown: !prevState.sortFunctionDown
            };
        });
    };

    render() {
        let arrow = <ArrowDown action={this.changeArrow} />;
        if (this.state.arrowUp) {
            arrow = <ArrowUp action={this.changeArrow} />;
        }

        return (
            <div className={classes.Container}>
                <h3>{this.props.name}</h3>
                {arrow}
            </div>
        );
    }
};

export default TableHeader;