import * as actionTypes from '../actions/actionTypes';
import { updateState } from './utility';

const initialState = {
    notifications: [],
    error: false,
    loading: false
}

const loadSuccess = (state, action) => {
    return updateState(state, {
        notifications: action.payload,
        loading: false,
        error: false
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_NOTIFICATIONS_SUCCESS: return loadSuccess(state, action);
        case actionTypes.LOAD_NOTIFICATIONS_START: return updateState(state, { loading: true });
        case actionTypes.LOAD_NOTIFICATIONS_FAIL: return updateState(state, { loading: false, error: true });
        default: return state;
    }
}

export default reducer;
