import * as actionTypes from '../actions/actionTypes';
import { updateState } from './utility';

const initialState = {
    filteredCoursesCurrent: [],
    filteredCoursesUpcoming: [],
    filteredCoursesFailed: [],
    filteredProgress: [],
    filteredProgressCurrent: []
};


//! FILTER FOR COURSES 
const filterCourses = (state, action) => {
    let { stream, all, electives, eligible, nonEligible, passed, failed,
        year1, year2, year3, year4,
        year1block1, year1block2, year1block3, year1block4,
        year2block1, year2block2, year2block3, year2block4,
        year3block1, year3block2, year3block3, year3block4,
        year4block1, year4block2, year4block3, year4block4,
    } = action.payload.filterOptions;

    // extract course type 
    let { type } = action.payload.courseType;

    // filter courses per stream 
    let gradesStream = action.payload.data.filter(course => {
        return course.studyPath === stream
    });

    // filter courses further based on the other conditions
    let courses = [];
    for (var course of gradesStream) {
        if (all) {
            courses.push(course);
        }
        if (electives && course.semester === "Semester7" && !courses.includes(course)) {
            courses.push(course);
        }
        if (eligible && course.isEligible && !courses.includes(course)) {
            courses.push(course);
        }
        if (nonEligible && !course.isEligible && !courses.includes(course)) {
            courses.push(course);
        }
        if (year1 && (course.semester === 1 || course.semester === 2) && !courses.includes(course)) {
            courses.push(course);
        }
        if (year2 && (course.semester === 3 || course.semester === 4) && !courses.includes(course)) {
            courses.push(course);
        }
        if (year3 && (course.semester === 5 || course.semester === 6) && !courses.includes(course)) {
            courses.push(course);
        }
        if (year4 && (course.semester === 7 || course.semester === 8) && !courses.includes(course)) {
            courses.push(course);
        }
        if (year1block1 && course.blocks[0] === "Block 1" && !courses.includes(course)) {
            courses.push(course);
        }
        if (year1block2 && course.blocks[0] === "Block 2" && !courses.includes(course)) {
            courses.push(course);
        }
        if (year1block3 && course.blocks[0] === "Block 3" && !courses.includes(course)) {
            courses.push(course);
        }
        if (year1block4 && course.blocks[0] === "Block 4" && !courses.includes(course)) {
            courses.push(course);
        }
        if (year2block1 && course.blocks[0] === "Block 5" && !courses.includes(course)) {
            courses.push(course);
        }
        if (year2block2 && course.blocks[0] === "Block 6" && !courses.includes(course)) {
            courses.push(course);
        }
        if (year2block3 && course.blocks[0] === "Block 7" && !courses.includes(course)) {
            courses.push(course);
        }
        if (year2block4 && course.blocks[0] === "Block 8" && !courses.includes(course)) {
            courses.push(course);
        }
        if (year3block1 && course.blocks[0] === "Block 9" && !courses.includes(course)) {
            courses.push(course);
        }
        if (year3block2 && course.blocks[0] === "Block 10" && !courses.includes(course)) {
            courses.push(course);
        }
        if (year3block3 && course.blocks[0] === "Block 11" && !courses.includes(course)) {
            courses.push(course);
        }
        if (year3block4 && course.blocks[0] === "Block 12" && !courses.includes(course)) {
            courses.push(course);
        }
        if (year4block1 && course.blocks[0] === "Block 13" && !courses.includes(course)) {
            courses.push(course);
        }
        if (year4block2 && course.blocks[0] === "Block 14" && !courses.includes(course)) {
            courses.push(course);
        }
        if (year4block3 && course.blocks[0] === "Block 15" && !courses.includes(course)) {
            courses.push(course);
        }
        if (year4block4 && course.blocks[0] === "Block 16" && !courses.includes(course)) {
            courses.push(course);
        }
    }

    // if no match is found, return only the stream filtering 
    if (courses.length === 0) {
        courses = gradesStream;
    }

    // check which array needs to be updated 
    if (type === "current") {
        return updateState(state, {
            filteredCoursesCurrent: courses
        });
    } else if (type === "upcoming") {
        return updateState(state, {
            filteredCoursesUpcoming: courses
        });
    } else {
        return updateState(state, {
            filteredCoursesFailed: courses
        });
    }
};



//! FILTERS FOR PROGRESS
const filterProgress = (state, action) => {
    console.log('In reducer progress: options ', action.payload.filterOptions);
    console.log('In reducer progress: data ', action.payload.data);
    console.log('In reducer courses: type ', action.payload.progressType);

    // extract the filtering options 
    let { stream, grade5_8, grade8_10, sem1, sem2,
        sem3, sem4, sem5, sem6, sem7, sem8, passed,
        failed, minor, specialisation } = action.payload.filterOptions;

    // extract progress type 
    let { type } = action.payload.progressType;

    // filter data 
    let gradesStream = action.payload.data;

    // filter data based on the other options (if they exist)
    let grades = [];
    for (var course of action.payload.data) {
        if (grade5_8 && (course.result.grade.value >= 5 && course.result.grade.value <= 8)) {
            console.log('got in 5-8');
            grades.push(course);
        }
        if (grade8_10 && (course.result.grade.value >= 8 && course.result.grade.value <= 10 && !grades.includes(course))) {
            console.log('got in 8-10');
            grades.push(course);
        }
        if (sem1 && course.semester === 1 && !grades.includes(course)) {
            console.log('got in sem1');
            grades.push(course);
        }
        if (sem2 && course.semester === 2 && !grades.includes(course)) {
            console.log('got in sem2');
            grades.push(course);
        }
        if (sem3 && course.semester === 3 && !grades.includes(course)) {
            console.log('got in sem3');
            grades.push(course);
        }
        if (sem4 && course.semester === 4 && !grades.includes(course)) {
            console.log('got in sem4');
            grades.push(course);
        }
        if (sem5 && course.semester === 5 && !grades.includes(course)) {
            console.log('got in sem5');
            grades.push(course);
        }
        if (sem6 && course.semester === 6 && !grades.includes(course)) {
            console.log('got in sem6');
            grades.push(course);
        }
        if (sem7 && course.semester === 7 && !grades.includes(course)) {
            console.log('got in sem7');
            grades.push(course);
        }
        if (sem8 && course.semester === 8 && !grades.includes(course)) {
            console.log('got in sem8');
            grades.push(course);
        }
        if (passed && course.status === "Passed" && !grades.includes(course)) {
            console.log('got in passed');
            grades.push(course);
        }
        if (failed && course.status === "Failed" && !grades.includes(course)) {
            console.log('got in failed');
            grades.push(course);
        }
    }

    // if no match is found, the filtering is done per stream only 
    if (grades.length === 0) {
        grades = gradesStream;
    }

    console.log('Courses filtered', grades);
    if (type === "currentGrades") {
        return updateState(state, {
            filteredProgressCurrent: grades
        });
    } else {
        return updateState(state, {
            filteredProgress: grades
        });
    }
};



//! REDUCER
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FILTER_COURSES: return filterCourses(state, action);
        case actionTypes.FILTER_PROGRESS: return filterProgress(state, action);
        default: return state;
    }
}

export default reducer; 