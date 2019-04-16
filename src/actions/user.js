import { API_BASE_URL } from '../config.js'
//login and registration actions 
import {storeAuthInfo, clearAuth} from './auth';
import {clearToken} from '../local-storage';

export const USER_REQUEST = 'USER_LOGIN_REQUEST';
export const userRequest = () => ({
    type: USER_REQUEST
});


export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const userLoginSuccess = user => ({
    type: USER_LOGIN_SUCCESS,
    user
});

//Should display a meaningful error to the user
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const userLoginError = error => ({
    type: USER_LOGIN_ERROR,
    error
});

export const userLogin = user => dispatch => {
    dispatch(userRequest());
    fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    })
    .then(result => {
        if(!result.ok){
            return Promise.reject(result.statusText);
        }
        return result.json();
    })
    .then(res => {
        storeAuthInfo(res.authToken, dispatch);
        dispatch(userLoginSuccess(user.username));
    })
    //below is untested
    .catch(err => {
        if(err === 'Unauthorized'){
          dispatch(userLoginError('Username or Password is Incorrect'))
        } else {
          dispatch(userLoginError(err));
        }
    })
}
export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST';
export const userLogoutRequest = () => ({
    type: USER_LOGOUT_REQUEST
});

export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const userLogoutSuccess = () => ({
    type: USER_LOGOUT_SUCCESS
});

export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE';
export const userLogoutFailure = error => ({
    type: USER_LOGOUT_FAILURE,
    error
})

export const userLogout = () => dispatch => {
    dispatch(userLogoutSuccess());
    //Logout failure protocol?
}

export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const userRegisterSuccess = () => ({
    type: USER_REGISTER_SUCCESS
});

export const USER_REGISTER_ERROR = 'USER_REGISTER_ERROR';
export const userRegisterError = error => ({
    type: USER_REGISTER_ERROR,
    error
})

export const userRegister = newUser => dispatch => {
    dispatch(userRequest());
    dispatch(clearAuth()); //Check this
    clearToken();
    fetch(`${API_BASE_URL}/users`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newUser)
    })
    .then(response => {
        if(!response.ok){
            return Promise.reject(response);
        }
        dispatch(userRegisterSuccess())
    })
    .catch(err => {
        dispatch(userRegisterError(err))
})
}

export const LANDING_PAGE_CLICK = 'LANDING_PAGE_CLICK';
export const landingPageClick = () => ({
    type: LANDING_PAGE_CLICK
});

export const TUTORIAL_CLICK = 'TUTORIAL_CLICK';
export const tutorialClick = (number) => ({
    type: TUTORIAL_CLICK,
    number
})