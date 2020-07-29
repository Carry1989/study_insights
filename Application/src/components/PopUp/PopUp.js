import React, { Component } from 'react';
import classes from './PopUp.css';
import RadioButton from '../../components/UI/Buttons/RadioButton/RadioButton';
import SquareButton from '../UI/Buttons/SquareButton/SquareButton';
import CoursesPopUp from './CoursesPopUp/CoursesPopUp';
import ProgressPopUp from './ProgressPopUp/ProgressPopUp';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/filters';

class PopUp extends Component {
    state = {
        stream: 'Software',
        defaultCheck: true,
        streamCheckTech: false,
        streamCheckBiz: false
    }

    filter = () => {
        this.props.toggle();
    };

    childrenCallback = (dataFromChild) => {
        if (this.props.courses) {
            let courseType = null;
            if (this.props.match.url.includes('current')) {
                courseType = { type: "current" }
            } else if (this.props.match.url.includes('upcoming')) {
                courseType = { type: "upcoming" }
            } else {
                courseType = { type: "failed" }
            }
            this.props.onFilterCourses(this.props.data, dataFromChild, courseType);
        } else {
            let progressType = null;
            let data = this.props.data;
            if (this.props.location.pathname === '/progress/currentGrades') {
                progressType = { type: "currentGrades" };
                data = this.props.dataCurrent;
            } else {
                progressType = { type: "allGrades" }
            }
            this.props.onFilterProgress(data, dataFromChild, progressType);
        }
    };

    render() {
        let display = this.props.courses ? <CoursesPopUp callbackParent={this.childrenCallback}
            stream={this.state.stream} />
            : <ProgressPopUp callbackParent={this.childrenCallback}
                stream={this.state.stream} />;

        return (
            <div className={classes.PopUp}>
                <div className={classes.PopUpContent}>
                    <div className={classes.Header}>
                        <div className={classes.Title}>Filters</div>
                        <div onClick={this.props.toggle} className={classes.Close}>&times;</div>
                    </div>

                    <div className={classes.Line}></div>

                    <div className={classes.Main}>
                        <div className={classes.Radio}>
                            <div><RadioButton id="s"
                                action={(event) => this.setState({
                                    stream: event.target.value,
                                    defaultCheck: true,
                                    streamCheckBiz: false,
                                    streamCheckTech: false
                                })}
                                ch={this.state.defaultCheck}
                                name="stream"
                                text="Software"
                                value="Software" /></div>

                            <div><RadioButton id="t"
                                action={(event) => this.setState({
                                    stream: event.target.value,
                                    streamCheckTech: true,
                                    defaultCheck: false,
                                    streamCheckBiz: false
                                })}
                                ch={this.state.streamCheckTech}
                                name="stream"
                                text="Technology"
                                value="Technology" /> </div>

                            <div><RadioButton id="b"
                                action={(event) => this.setState({
                                    stream: event.target.value,
                                    streamCheckBiz: true,
                                    defaultCheck: false,
                                    streamCheckTech: false
                                })}
                                ch={this.state.streamCheckBiz}
                                name="stream"
                                text="Business"
                                value="Business" /></div>
                        </div>

                        <div className={classes.Filters}>
                            {display}
                        </div>

                        <div style={{ alignSelf: 'center' }}>
                            <SquareButton title="Apply Filters" onClick={() => this.filter()} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};

const mapDispatchToProps = dispatch => {
    return {
        onFilterCourses: (data, options, courseType) => dispatch(actions.filterCourses(data, options, courseType)),
        onFilterProgress: (data, options, progressType) => dispatch(actions.filterProgress(data, options, progressType))
    }
};

export default withRouter(connect(null, mapDispatchToProps)(PopUp));