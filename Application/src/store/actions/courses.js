import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

export const loadCoursesData = () => {
    return dispatch => {
        dispatch(loadCoursesDataStart());
        axios.get('https://studyinsightfontys.azurewebsites.net/api/student/courses/denis@student.fontys.nl')
            .then(response => {
                dispatch(loadCoursesDataSuccess(response.data));
            })
            .catch(error => console.log(error));
    }
}

export const loadCoursesDataStart = () => {
    return {
        type: actionTypes.LOAD_COURSES_DATA_START
    }
}

export const loadCoursesDataSuccess = (data) => {
    return {
        type: actionTypes.LOAD_COURSES_DATA_SUCCESS,
        payload: data
    }
}

export const loadCoursesDataFail = () => {
    return {
        type: actionTypes.LOAD_COURSES_DATA_FAIL
    }
}