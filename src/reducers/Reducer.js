import {USER_REGISTER_SUCCESS, USER_REGISTER_ERROR, USER_LOGIN_ERROR, USER_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_FAILURE, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, LANDING_PAGE_CLICK} from '../actions/user';
import {SET_PAIN_LOCATION, ADD_PAIN, REQUEST_PAIN_FAILURE, REQUEST_PAIN_SUCCESS, SUBMIT_PAIN_ERROR, SUBMIT_PAIN_SUCCESS, SUBMIT_PAIN_REQUEST} from '../actions/pain'
import {currentMoment, sevenDaysAgo, fourteenDaysAgo, oneMonthAgo, threeMonthsAgo, sixMonthsAgo, oneYearAgo} from '../time';

import { SET_AUTH_TOKEN, CLEAR_AUTH, AUTH_ERROR, AUTH_REQUEST, AUTH_SUCCESS } from '../actions/auth';

export const initialState = {
    //Shuffles user to landing page (or allows them to bypass when false)
    landingPage: true,
    //Determines if user sees userpage or login/registration
    loggedIn: false,
    //Will help prevent multiple requests to server
    loading: false,
    //Purely for fluff. Do not rely on this
    username: '',
    //will be doing our data comparison to prevent double rating on the front end
    userData: [],
    //addPain triggers the buttons to add the pain
    addPain: false,
    //used to compare to the pain dates
    displayDate: sevenDaysAgo,
    message: 'Please Log In, Register, or Click the Image Above to Learn More',
    painLocation: '',
    token: null
}

export default (state = initialState, action) => {
    // console.log(JSON.stringify(initialState));
    // console.log(action);
    //if(action.type === SOMETHING){return STATE CHANGE}
    if(action.type === USER_REQUEST || action.type === SUBMIT_PAIN_REQUEST){
        return Object.assign({}, state, {
            loading: true
        });
    } 
    else if(action.type === USER_LOGIN_SUCCESS){
        return Object.assign({}, state, {
            loggedIn: true,
            username: action.user, //is this too much at once?
            loading: false
        });
    }
    else if(action.type === USER_LOGOUT_REQUEST){
        return Object.assign({}, state, {
            loading: true
        });
    }
    else if(action.type === USER_LOGOUT_SUCCESS){
        return Object.assign({}, initialState, {
        })
    }
    // else if(action.type === USER_LOGOUT_FAILURE){
    //     return Object.assign({}, state, {
    //         message: action.error.message,
    //         loading: false
    //     })
    // }
    else if(action.type === ADD_PAIN){
        return Object.assign({}, state, {
            addPain: true,
            painLocation: action.location
        });
    }
    else if(action.type === SUBMIT_PAIN_SUCCESS){
        return Object.assign({}, state, {
            addPain: false
        });
    }
    else if(action.type === REQUEST_PAIN_SUCCESS){
        return Object.assign({}, state, {
            loading: false,
            userData: action.result
        });
    }
    else if(action.type === USER_LOGIN_ERROR || action.type === SUBMIT_PAIN_ERROR){
        return Object.assign({}, state, {
            message: action.error,
            loading: false
        });
    }
    else if(action.type === SET_AUTH_TOKEN){
        return Object.assign({}, state, {
            token: action.token
        });
    }
    //Check this
    else if(action.type === CLEAR_AUTH){
        return Object.assign({}, state, {
            token: null,
            username: null,
            loading: false
        });
    }
    else if(action.type === AUTH_REQUEST){
        return Object.assign({}, state, {
            loading: true
        })
    }
    else if(action.type === AUTH_ERROR){
        return Object.assign({}, state, {
            loading: false, 
            message: action.error
        })
    }
    else if(action.type === USER_REGISTER_SUCCESS){
        return Object.assign({}, state, {
            loading: false,
            message: "User Created! Please log in"
        })
    }
    else if(action.type === USER_REGISTER_ERROR){
        return Object.assign({}, state, {
            loading: false,
            message: 'Registration Failed. Please use a different name'
        })
    }
    else if(action.type === SUBMIT_PAIN_ERROR){
        return Object.assign({}, state, {
            addPain: false,
            message: action.error.message
        })
    }
    else if(action.type === LANDING_PAGE_CLICK){
        return Object.assign({}, state, {
            landingPage: false
        })
    }
    else if(action.type === REQUEST_PAIN_FAILURE){
        return Object.assign({}, state, {
            loading: false,
            message: action.error
        })
    }
    return state;
}