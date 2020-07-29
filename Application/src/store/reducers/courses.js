import * as actionTypes from '../actions/actionTypes';
import { updateState } from './utility';

const initialState = {
    currentCourses: [],
    upcomingCourses: [],
    failedCourses: [],
    loading: false,
    error: false
};

const loadSuccess = (state, action) => {
    return updateState(state, {
        currentCourses: action.payload.currentCourses,
        upcomingCourses: action.payload.upcomingCourses,
        failedCourses: action.payload.failedCourses,
        loading: false,
        error: false
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_COURSES_DATA_SUCCESS: return loadSuccess(state, action);
        case actionTypes.LOAD_COURSES_DATA_START: return updateState(state, { loading: true });
        case actionTypes.LOAD_COURSES_DATA_FAIL: return updateState(state, { loading: false, error: true });
        default: return state;
    }
}

export default reducer;