import * as actionTypes from '../actions/actionTypes';
import { updateState } from './utility';

const initialState = {
    profileData: [],
    loading: false,
    error: false
};

const loadSuccess = (state, action) => {
    return updateState(state, {
        profileData: action.payload,
        loading: false,
        error: false
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_PROFILE_DATA_SUCCESS: return loadSuccess(state, action);
        case actionTypes.LOAD_PROFILE_DATA_START: return updateState(state, { loading: true });
        case actionTypes.LOAD_PROFILE_DATA_FAIL: return updateState(state, { loading: false, error: true });
        default: return state;
    }
}

export default reducer;