import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

// check which letter is uppercase from the string 
const getUpperCaseLetter = (array) => {
    for (var i = 0; i < array.length; i++) {
        if (array.charAt(i) === array.charAt(i).toUpperCase()) {
            return array.charAt(i);
        }
    }
}; 

export const loadProfileData = () => {
    return dispatch => {
        dispatch(loadProfileDataStart());
        axios.get('https://studyinsightfontys.azurewebsites.net/api/student/personal-details/denis@student.fontys.nl')
            .then(response => {
                let array = [];
                for (let key in response.data) {

                    // reformat the column name 
                    let name = key.replace(/[A-Z]/g, ' ');
                    let char = getUpperCaseLetter(key);
                    let arr = name.split(' ');
                    let nf;
                    if (arr.length === 2) {
                        nf = arr[0].charAt(0).toUpperCase() + arr[0].substring(1).toLowerCase() + " "
                            + " " + char + arr[1];
                    } else {
                        nf = arr[0].charAt(0).toUpperCase() + arr[0].substring(1).toLowerCase();
                    }

                    // add everything to the array
                    array.push({
                        colName: nf,
                        colValue: response.data[key],
                        id: key
                    });
                }
                dispatch(loadProfileDataSuccess(array));
            })
            .catch(error => {
                console.log(error);
            });
    }
}

export const loadProfileDataStart = () => {
    return {
        type: actionTypes.LOAD_PROFILE_DATA_START
    }
}

export const loadProfileDataSuccess = (data) => {
    return {
        type: actionTypes.LOAD_PROFILE_DATA_SUCCESS,
        payload: data
    }
}

export const loadProfileDataFail = () => {
    return {
        type: actionTypes.LOAD_PROFILE_DATA_FAIL
    }
}