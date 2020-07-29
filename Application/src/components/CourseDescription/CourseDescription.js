import React, { Component } from 'react';
import classes from './CourseDescription.css';
import SqureBtn from '../UI/Buttons/SquareButton/SquareButton';
import { withRouter } from 'react-router';

class CourseDescription extends Component {
    
    render() {
        let course = this.props.location.state.data;
        let assesment = course.assesment;
        let stringGrades = [];
        for (var key in assesment) {
            stringGrades.push(key + " " + assesment[key]);
        }

        return (
            <div className={classes.Container}>
                <div className={classes.LargeMenu}>
                    <div>
                        <h2 className={classes.h2}>Course Description</h2>
                        <div className={classes.LargeTextDiv}>
                            {course.descriptions.map(el => <p key={el}>{el}</p>)}
                        </div>
                    </div>

                    <div>
                        <h2 className={classes.h2}>Learning Objectives</h2>
                        <div className={classes.LargeTextDiv}>
                            {course.learningOutcomes.map(el => <p key={el}>{el}</p>)}
                        </div>
                    </div>

                    <div>
                        <a href={course.courseDescriptionLink}
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }} target="_blank">
                            <SqureBtn title="Check Fhict Portal Description" />
                        </a>
                    </div>
                </div>

                <div className={classes.RightMenu}>
                    <div className={classes.SmallCard}>
                        <h2 className={classes.h2}>Pre-requisites</h2>
                        <div className={classes.SmallTextDiv}>
                            {course.preRequisites.courseCodes.map(el => <p key={el}>* {el}</p>)}
                            {course.preRequisites.otherPreRequisites.map(el => <p key={el}>* {el}</p>)}
                        </div>

                        <h2 className={classes.h2}>Assesment</h2>
                        <div className={classes.SmallTextDiv}>
                            {stringGrades.map(el => <p key={el}>* {el}</p>)}
                        </div>

                        <h2 className={classes.h2}>Total ECs: <span className={classes.Text}>{course.eCs}</span></h2>
                    </div>

                    <div className={classes.SmallCard}>
                        <h2 className={classes.h2}>Teachers</h2>
                        <div className={classes.SmallTextDiv}>
                            {course.teachers.map(el => <p key={el}>{el}</p>)}
                        </div>

                        <h2 className={classes.h2}>Block Course</h2>
                        <h2 className={classes.h2}>Course Owner</h2>
                        <div className={classes.SmallTextDiv}>
                            {course.courseOwner}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default withRouter(CourseDescription);