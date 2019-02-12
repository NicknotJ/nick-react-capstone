import {USER_REGISTER_SUCCESS, USER_LOGIN_ERROR, USER_REQUEST, USER_LOGIN_SUCCESS} from '../actions/user';
import {SET_PAIN_LOCATION, ADD_PAIN, REQUEST_PAIN_FAILURE, REQUEST_PAIN_SUCCESS, SUBMIT_PAIN_ERROR, SUBMIT_PAIN_SUCCESS, SUBMIT_PAIN_REQUEST} from '../actions/pain'
import {currentMoment, sevenDaysAgo, fourteenDaysAgo, oneMonthAgo, threeMonthsAgo, sixMonthsAgo, oneYearAgo} from '../time';
import { CHANGE_DISPLAY_TIME } from '../actions/time';
import { SET_AUTH_TOKEN, CLEAR_AUTH, AUTH_ERROR, AUTH_REQUEST, AUTH_SUCCESS } from '../actions/auth';
import { bindActionCreators } from 'redux';
// const aDate = new Date();
// const anotherDate = new Date();
// // const initialDate = aDate.setDate(aDate.getDate()-7);
// const isoString = aDate.toISOString();
// let sevenDays = anotherDate.setDate(anotherDate.getDate() = 7);
const initialState = {
    //Determines if user sees userpage or login/registration
    loggedIn: false,
    //Will help prevent multiple requests to server
    loading: false,
    //Purely for fluff. Do not rely on this
    username: '',
    userData: [],
    //addPain triggers the buttons to add the pain
    addPain: false,
    //Possibly redundent 
    displayDate: sevenDaysAgo,
    message: '',
    painLocation: '',
    token: null
}

export default (state = initialState, action) => {
    //if(action.type === SOMETHING){return STATE CHANGE}
    if(action.type === USER_REQUEST || action.type === SUBMIT_PAIN_REQUEST){
        return Object.assign({}, state, {
            loading: true
        });
    }
    if(action.type === USER_LOGIN_SUCCESS){
        return Object.assign({}, state, {
            loggedIn: true,
            username: action.user, //is this too much at once?
            loading: false
        });
    }
    if(action.type === ADD_PAIN){
        return Object.assign({}, state, {
            addPain: true,
            painLocation: action.location
        });
    }
    if(action.type === SUBMIT_PAIN_SUCCESS){
        return Object.assign({}, state, {
            addPain: false
        });
    }
    if(action.type === REQUEST_PAIN_SUCCESS){
        return Object.assign({}, state, {
            loading: false,
            userData: action.result
        });
    }
    if(action.type === USER_LOGIN_ERROR || action.type === SUBMIT_PAIN_ERROR){
        return Object.assign({}, state, {
            message: action.error,
            loading: false
        });
    }
    if(action.type === CHANGE_DISPLAY_TIME){
        return Object.assign({}, state, {
            displayDate: action.displayTime
        });
    }
    if(action.type === SET_AUTH_TOKEN){
        return Object.assign({}, state, {
            token: action.token
        });
    }
    //Check this
    if(action.type === CLEAR_AUTH){
        return Object.assign({}, state, {
            token: null,
            username: null,
            loading: false
        });
    }
    if(action.type === AUTH_REQUEST){
        return Object.assign({}, state, {
            loading: true
        })
    }
    if(action.type === AUTH_ERROR){
        return Object.assign({}, state, {
            loading: false, 
            message: action.error
        })
    }
    if(action.type === USER_REGISTER_SUCCESS){
        return Object.assign({}, state, {
            loading: false,
            message: "User Created! Please log in"
        })
    }
    if(action.type === SUBMIT_PAIN_ERROR){
        return Object.assign({}, state, {
            addPain: false,
            message: action.error.message
        })
    }
    return state;
}