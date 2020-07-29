import React, { Component } from 'react';
import classes from './CheckArrow.css'
import ArrowDown from '../../../UI/Table/Arrow/ArrowDown';
import ArrowUp from '../../../UI/Table/Arrow/ArrowUp';
import CheckItem from '../CheckItem/CheckItem';

class CheckArrow extends Component {
    state = {
        arrowUp: false
    };

    changeArrow = () => {
        this.setState(prevState => {
            return {
                arrowUp: !prevState.arrowUp,
            };
        });
    }

    render() {
        let arrow = <ArrowDown action={this.changeArrow} />;
        let extraOptions = null;

        if (this.state.arrowUp) {
            arrow = <ArrowUp action={this.changeArrow} />;
            extraOptions = (
                <div style={{ marginLeft: '10px', padding: '10px' }}>
                    <CheckItem title="Block 1"
                        action={this.props.action}
                        value={this.props.year + "block1"} />

                    <CheckItem title="Block 2"
                        action={this.props.action}
                        value={this.props.year + "block2"} />

                    <CheckItem title="Block 3"
                        action={this.props.action}
                        value={this.props.year + "block3"} />

                    <CheckItem title="Block 4"
                        action={this.props.action}
                        value={this.props.year + "block4"} />
                </div>
            );
        }

        return (
            <div>
                <div className={classes.Container}>
                    <label className={classes.container}>
                        {this.props.title}
                        <input type="checkbox" onChange={this.props.action} value={this.props.value} />
                        <span className={classes.checkmark}></span>
                    </label>
                    {arrow}
                </div>
                {extraOptions}
            </div>
        );
    }
};

export default CheckArrow;