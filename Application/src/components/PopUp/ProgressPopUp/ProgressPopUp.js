import React, { Component } from 'react';
import CheckItem from '../Items/CheckItem/CheckItem';

class ProgressPopUp extends Component {

    // global variable for storing the filters chosen
    _optionsChosen = {};

    state = {
        showGrades: false
    };

    // handler for expanding grades section 
    handleChange = () => {
        this.setState(prevState => {
            return {
                showGrades: !prevState.showGrades
            }
        });
    }

    // handler for each checkbox click
    addOptions = (event) => {
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
    }


    render() {

        let grades = null;
        if (this.state.showGrades) {
            grades = (
                <div style={{ marginLeft: '10px', padding: '10px' }}>
                    <CheckItem title="5 - 8"
                        value="grade5_8"
                        action={(event) => this.addOptions(event)} />

                    <CheckItem title="8 - 10"
                        action={(event) => this.addOptions(event)}
                        value="grade8_10" />
                </div>
            );
        }

        return (
            <>
                <div>
                    <CheckItem title="Semester 1"
                        action={(event) => this.addOptions(event)}
                        value="sem1" />

                    <CheckItem title="Semester 2"
                        action={(event) => this.addOptions(event)}
                        value="sem2" />

                    <CheckItem title="Semester 3"
                        action={(event) => this.addOptions(event)}
                        value="sem3" />

                    <CheckItem title="Semester 4"
                        action={(event) => this.addOptions(event)}
                        value="sem4" />

                    <CheckItem title="Semester 5"
                        action={(event) => this.addOptions(event)}
                        value="sem5" />

                    <CheckItem title="Semester 6"
                        action={(event) => this.addOptions(event)}
                        value="sem6" />

                    <CheckItem title="Semester 7"
                        action={(event) => this.addOptions(event)}
                        value="sem7" />

                    <CheckItem title="Semester 8"
                        action={(event) => this.addOptions(event)}
                        value="sem8" />
                </div>

                <div>
                    <CheckItem title="Passed"
                        value="passed"
                        action={(event) => this.addOptions(event)} />

                    <CheckItem title="Failed"
                        value="failed"
                        action={(event) => this.addOptions(event)} />

                    <CheckItem title="Grade"
                        action={this.handleChange} />

                    {grades}

                    <CheckItem title="Minor"
                        value="minor"
                        action={(event) => this.addOptions(event)} />

                    <CheckItem title="Specialisation"
                        value="specialisation"
                        action={(event) => this.addOptions(event)} />
                </div>
            </>
        );
    }
};

export default ProgressPopUp;