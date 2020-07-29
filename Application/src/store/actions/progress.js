import * as actionTypes from './actionTypes';
import axios from 'axios';

// PROGRESS DATA
export const loadProgressData = () => {
    return dispatch => {
        dispatch(loadProgressStart());

        axios.get('https://studyinsightfontys.azurewebsites.net/api/student/course-result/denis@student.fontys.nl')
            .then(response => {
                dispatch(loadProgressSuccess(response.data));
            })
            .catch(error => console.log(error));
    }
}

export const loadProgressStart = () => {
    return {
        type: actionTypes.LOAD_PROGRESS_DATA_START
    }
}

export const loadProgressSuccess = (data) => {
    return {
        type: actionTypes.LOAD_PROGRESS_DATA_SUCCESS,
        payload: data
    }
}

export const loadProgressFail = () => {
    return {
        type: actionTypes.LOAD_PROGRESS_DATA_FAIL
    }
}



// PROGRESS SUMMARY DATA 
export const loadProgressSummaryStart = () => {
    return {
        type: actionTypes.LOAD_PROGRESS_SUMMARY_START
    }
}

export const loadProgressSummarySuccess = (data) => {
    return {
        type: actionTypes.LOAD_PROGRESS_SUMMARY_SUCCESS,
        payload: data
    }
}

export const loadProgressSummaryFail = () => {
    return {
        type: actionTypes.LOAD_PROGRESS_SUMMARY_FAIL
    }
}

export const loadProgressSummary = () => {
    return dispatch => {
        dispatch(loadProgressSummaryStart());
        axios.get('https://studyinsightfontys.azurewebsites.net/api/student/progress-summary/denis@student.fontys.nl')
            .then((response) => {
                const fetchedDataToArray = [];
                for (let key in response.data) {
                    fetchedDataToArray.push({
                        ...response.data[key],
                        id: key
                    });
                }
                dispatch(loadProgressSummarySuccess(fetchedDataToArray));
            })
            .catch(error => {
                console.log(error);
            });
    }
}    
