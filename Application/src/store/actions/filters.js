import * as actionTypes from '../actions/actionTypes';

// filter for Courses page
export const filterCourses = (data, filterOptions, courseType) => {
    return {
        type: actionTypes.FILTER_COURSES,
        payload: { data, filterOptions, courseType }
    }
};


// filter for Progress page
export const filterProgress = (data, filterOptions, progressType) => {
    return {
        type: actionTypes.FILTER_PROGRESS,
        payload: { data, filterOptions, progressType }
    }
}; 