import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import InnerNavItems from '../../components/Navigation/InnerNavigation/InnerNavItems';
import SquareButton from '../../components/UI/Buttons/SquareButton/SquareButton';
import CurrentCourses from './CurrentCourses';
import UpcomingCourses from './UpcomingCourses';
import FailedCourses from './FailedCourses';
import classes from './Courses.css';
import * as actions from '../../store/actions/courses';

class Courses extends Component {

    state = { showPopUp: false };

    componentDidMount() {
        this.props.onLoadCoursesData();
    };

    togglePopUp = () => {
        this.setState(prevState => {
            return {
                showPopUp: !prevState.showPopUp
            }
        });
    }

    render() {
        let data = [
            { id: 0, link: '/current', text: 'Current' },
            { id: 1, link: '/upcoming', text: 'Upcoming' },
            { id: 2, link: '/failed', text: 'Failed' }
        ];

        let error = this.props.error ? <h3>Error loading courses data.</h3> : null;

        return (
            <div>
                <div style={{ padding: '3.5rem' }}>
                    <div className={classes.innerNav}>
                        <InnerNavItems array={data} />
                        <SquareButton icon="icon-funnel" title="Filter" onClick={() => this.togglePopUp()} />
                    </div>

                    <Route path={this.props.match.url + '/current'} render={() => {
                        return <CurrentCourses error={error}
                            showModal={this.state.showPopUp}
                            togglePopUp={this.togglePopUp} />;
                    }} />

                    <Route path={this.props.match.url + '/upcoming'} render={() => {
                        return <UpcomingCourses error={error}
                            showModal={this.state.showPopUp}
                            togglePopUp={this.togglePopUp} />;
                    }
                    } />

                    <Route path={this.props.match.url + '/failed'} render={() => {
                        return <FailedCourses error={error}
                            showModal={this.state.showPopUp}
                            togglePopUp={this.togglePopUp} />;
                    }} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.courses.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadCoursesData: () => dispatch(actions.loadCoursesData())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Courses));
