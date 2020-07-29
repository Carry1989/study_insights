import React, { Component } from 'react';
import TableHeader from '../../components/UI/Table/Header/TableHeader';
import PopUp from '../../components/PopUp/PopUp';
import CourseRows from '../../components/Rows/CourseRows/CourseRows';
import { connect } from 'react-redux';
import * as sortFunctions from '../../shared/sort';
import Spinner from '../../components/UI/Spinner/Spinner';


class UpcomingCourses extends Component {
    state = {
        courses: []
    }

    sortUp = (propertyName) => {
        let sortedArray = sortFunctions.sortUp(propertyName, this.props.upcomingCourses);
        if (this.props.filteredCourses.length > 0) {
            sortedArray = sortFunctions.sortUp(propertyName, this.props.filteredCourses);
        }
        this.setState({
            courses: sortedArray
        });
    };

    sortDown = (propertyName) => {
        let sortedArray = sortFunctions.sortDown(propertyName, this.props.upcomingCourses);
        if (this.props.filteredCourses.length > 0) {
            sortedArray = sortFunctions.sortDown(propertyName, this.props.filteredCourses);
        }
        this.setState({
            courses: sortedArray
        });
    };

    render() {
        let popUp = <PopUp toggle={this.props.togglePopUp}
            data={this.props.upcomingCourses}
            courses={true} />


        let displayedData = this.props.loading ? <Spinner /> : null;

        if (!this.props.loading) {
            displayedData = <CourseRows array={this.props.upcomingCourses} />;
        }

        if (this.props.filteredCourses.length > 0) {
            displayedData = <CourseRows array={this.props.filteredCourses} />;
        }

        return (
            <div>
                {this.props.showModal ? popUp : null}
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
                {displayedData}
                {this.props.error}
            </div>);
    }
}

const mapStateToProps = state => {
    return {
        filteredCourses: state.filters.filteredCoursesUpcoming,
        loading: state.courses.loading,
        upcomingCourses: state.courses.upcomingCourses
    }
};

export default connect(mapStateToProps)(UpcomingCourses); 