import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableHeader from '../../components/UI/Table/Header/TableHeader';
import PopUp from '../../components/PopUp/PopUp';
import classes from './Courses.css';
import CourseRows from '../../components/Rows/CourseRows/CourseRows';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as sortFunctions from '../../shared/sort';

class FailedCourses extends Component {
    state = {
        courses: []
    }

    sortUp = (propertyName) => {
        let sortedArray = sortFunctions.sortUp(propertyName, this.props.failedCourses);
        if (this.props.filteredCourses.length > 0) {
            sortedArray = sortFunctions.sortUp(propertyName, this.props.filteredCourses);
        }
        this.setState({
            courses: sortedArray
        });
    };

    sortDown = (propertyName) => {
        let sortedArray = sortFunctions.sortDown(propertyName, this.props.failedCourses);
        if (this.props.filteredCourses.length > 0) {
            sortedArray = sortFunctions.sortDown(propertyName, this.props.filteredCourses);
        }
        this.setState({
            courses: sortedArray
        });
    };

    render() {
        let popUp = <PopUp toggle={this.props.togglePopUp}
            data={this.props.failedCourses}
            courses={true} />

        let displayedDataFailed = this.props.loading ? <Spinner /> : null;

        if (!this.props.loading) {
            displayedDataFailed = <CourseRows array={this.props.failedCourses} />;
        }

        if (this.props.filteredCourses.length > 0) {
            displayedDataFailed = <CourseRows array={this.props.filteredCourses} />;
        }

        let ui = <h4 className={classes.h4}>You have no failed courses so far.</h4>;
        if (this.props.failedCourses.length > 0) {
            ui = (
                <div>
                    <div style={{ display: 'flex', marginTop: '2rem' }}>
                        <TableHeader name="Code"
                            actionUp={() => this.sortUp('courseCode')}
                            actionDown={() => this.sortDown('courseCode')} />
                        <TableHeader name="Name"
                            actionUp={() => this.sortUp('courseName')}
                            actionDown={() => this.sortDown('courseName')} />
                        <TableHeader name="Semester"
                            actionUp={() => this.sortUp('semester')}
                            actionDown={() => this.sortDown('semester')} />
                        <TableHeader name="Block"
                            actionUp={() => this.sortUp('blocks')}
                            actionDown={() => this.sortDown('blocks')} />
                        <TableHeader name="ECs"
                            actionUp={() => this.sortUp('eCs')}
                            actionDown={() => this.sortDown('eCs')} />
                        <TableHeader name="Status"
                            actionUp={() => this.sortUp('isEligible')}
                            actionDown={() => this.sortDown('isEligible')} />
                    </div>
                    {displayedDataFailed}
                    {this.props.error}
                </div>
            );
        }

        return <div> {this.props.showModal ? popUp : null} {ui} </div>;
    }
}

const mapStateToProps = state => {
    return {
        filteredCourses: state.filters.filteredCoursesFailed,
        failedCourses: state.courses.failedCourses,
        loading: state.courses.loading
    }
};

export default connect(mapStateToProps)(FailedCourses); 