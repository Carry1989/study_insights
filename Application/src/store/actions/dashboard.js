import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

export const loadDashboardData = () => {
    return dispatch => {
        dispatch(loadDashboardDataStart());

        axios.get('https://studyinsightfontys.azurewebsites.net/api/student/dashboard/denis@student.fontys.nl')
            .then(response => {
                dispatch(loadDashboardDataSuccess(response.data));
            })
            .catch(error => console.log(error));
    }
};

export const loadDashboardDataStart = () => {
    return {
        type: actionTypes.LOAD_DASHBOARD_DATA_START
    }
};

export const loadDashboardDataSuccess = (data) => {
    return {
        type: actionTypes.LOAD_DASHBOARD_DATA_SUCCESS,
        payload: data
    }
};

export const loadDashboardDataFail = () => {
    return {
        type: actionTypes.LOAD_DASHBOARD_DATA_FAIL
    }
};

