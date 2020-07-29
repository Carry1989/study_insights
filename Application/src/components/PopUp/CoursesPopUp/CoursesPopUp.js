import React, { Component } from 'react';
import CheckArrowItem from '../Items/CheckArrow/CheckArrow';
import CheckItem from '../Items/CheckItem/CheckItem';

class CoursesPopUp extends Component {
    // global variable for storing the filters chosen
    _optionsChosen = {};

    // handler for each checkbox click
    addOptions = (event) => {
        console.log("Checked or not ", event.target.checked);
        console.log("Value of the checkbox ", event.target.value);

        if (event.target.checked) {
            let newOptions = {
                ...this._optionsChosen,
                [event.target.value]: true
            };
            this._optionsChosen = { ...newOptions };

        } else {
            let newOptions = {
                ...this._optionsChosen
            };
            delete newOptions[event.target.value];
            this._optionsChosen = { ...newOptions };
        }
    }

    componentWillUnmount() {
        this.props.callbackParent({ ...this._optionsChosen, stream: this.props.stream });
    };

    render() {
        return (
            <>
                <div>
                    <CheckArrowItem title="Year One"
                        action={(event) => this.addOptions(event)}
                        value="year1"
                        year="year1" />

                    <CheckArrowItem title="Year Two"
                        action={(event) => this.addOptions(event)}
                        value="year2"
                        year="year2" />

                    <CheckArrowItem title="Year Three"
                        action={(event) => this.addOptions(event)}
                        value="year3"
                        year="year3" />

                    <CheckArrowItem title="Year Four"
                        action={(event) => this.addOptions(event)}
                        value="year4"
                        year="year4" />
                </div>
                <div>
                    <CheckItem title="All Courses"
                        action={(event) => this.addOptions(event)}
                        value="all" />

                    <CheckItem title="Electives"
                        action={(event) => this.addOptions(event)}
                        value="electives" />

                    <CheckItem title="Eligible"
                        action={(event) => this.addOptions(event)}
                        value="eligible" />

                    <CheckItem title="Non-Eligible"
                        action={(event) => this.addOptions(event)}
                        value="nonEligible" />

                    <CheckItem title="Passed"
                        action={(event) => this.addOptions(event)}
                        value="passed" />

                    <CheckItem title="Failed"
                        action={(event) => this.addOptions(event)}
                        value="failed" />
                </div>
            </>
        );
    }

};

export default CoursesPopUp;