import * as actionTypes from '../actions/actionTypes';
import { updateState } from './utility';

const initialState = {
    progressData: [],
    progressDataCurrent: [],
    loading: false,
    error: false,
    progressSummary: [],
    loadingSummary: false,
    errorSummary: false
};

const loadSuccess = (state, action) => {
    return updateState(state, {
        progressData: action.payload.allGrades,
        progressDataCurrent: action.payload.currentSemesterGrades,
        loading: false,
        error: false
    });
};

const loadSummarySuccess = (state, action) => {
    return updateState(state, {
        progressSummary: action.payload,
        loadingSummary: false,
        errorSummary: false
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // progress data
        case actionTypes.LOAD_PROGRESS_DATA_SUCCESS: return loadSuccess(state, action);
        case actionTypes.LOAD_PROGRESS_DATA_START: return updateState(state, { loading: true });
        case actionTypes.LOAD_PROGRESS_DATA_FAIL: return updateState(state, { loading: false, error: true });

        // progress summary data
        case actionTypes.LOAD_PROGRESS_SUMMARY_START: return updateState(state, { loadingSummary: true });
        case actionTypes.LOAD_PROGRESS_SUMMARY_FAIL: return updateState(state, { errorSummary: true });
        case actionTypes.LOAD_PROGRESS_SUMMARY_SUCCESS: return loadSummarySuccess(state, action);

        default: return state;
    }
};

export default reducer;