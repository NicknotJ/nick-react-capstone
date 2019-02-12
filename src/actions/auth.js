import jwtDecode from 'jwt-decode';
import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';

import {saveToken, clearToken} from '../local-storage';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
//username? 
export const authSuccess = username => ({
    type: AUTH_SUCCESS,
    username
})

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
    type: AUTH_ERROR,
    error
})


export const storeAuthInfo = (authToken, dispatch) => {
    const token = jwtDecode(authToken); //allows us to later grab the username
    dispatch(setAuthToken(authToken));
    dispatch(authSuccess(token.username));
    saveToken(authToken);
};

//login function is in user

export const refreshAuthToken = () => (dispatch, getState) => {
    dispatch(authRequest());
    const token = getState().auth.authToken; //update to grabbing from local storage
    return fetch(`${API_BASE_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
            //Cannot get a new token without providing an unexpired one
        }
    })
    .then(res => {
        if(!res.ok){
            return Promise.reject(res);
        }
        return res.json();
    })
    .then(result => {
        storeAuthInfo(result.authToken, dispatch)
    })
    .catch(err => {
        dispatch(authError(err));
        dispatch(clearAuth());
        clearToken(token)
    });
    
};