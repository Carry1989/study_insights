import * as actionTypes from '../actions/actionTypes';
import { updateState } from './utility';

const initialState = {
    // graph 
    averagePerSemester: {},
    previousYearAveragePerBlock: {},
    // overview
    studyPath: "",
    currentSemester: "",
    class: "",
    ecsAchievable: "",
    ectsAchieved: "",
    nrOfDueCourses: "",
    nrOfCoursesInCurrentSemester: "",
    percentile: 0,
    totalAverage: 0,
    year: 1,
    // state
    loading: false,
    error: false
};

const loadSuccess = (state, action) => {
    let data = action.payload;
    return updateState(state, {
        // state
        loading: false,
        error: false,
        // overview
        studyPath: data.studyPath,
        currentSemester: data.currentSemester,
        class: data.class,
        ecsAchievable: data.ecsAchievable,
        ectsAchieved: data.ectsAchieved,
        nrOfDueCourses: data.nrOfDueCourses,
        nrOfCoursesInCurrentSemester: data.nrOfCoursesInCurrentSemester,
        percentile: data.percentile,
        totalAverage: data.totalAverage,
        year: data.currentYear,
        //graph
        averagePerSemester: data.averagePerSemester,
        previousYearAveragePerBlock: data.previousYearAveragePerBlock
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_DASHBOARD_DATA_START: return updateState(state, { loading: true });
        case actionTypes.LOAD_DASHBOARD_DATA_FAIL: return updateState(state, { loading: false, error: true });
        case actionTypes.LOAD_DASHBOARD_DATA_SUCCESS: return loadSuccess(state, action);
        default: return state;
    }
};

export default reducer;