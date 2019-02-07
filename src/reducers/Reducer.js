import {USER_LOGIN_ERROR, USER_REQUEST, USER_LOGIN_SUCCESS} from '../actions/user';
import {SET_PAIN_LOCATION, ADD_PAIN, REQUEST_PAIN_FAILURE, REQUEST_PAIN_SUCCESS, SUBMIT_PAIN_ERROR, SUBMIT_PAIN_SUCCESS, SUBMIT_PAIN_REQUEST} from '../actions/pain'

const aDate = new Date();
const initialDate = aDate.setDate(aDate.getDate()-7);
const initialState = {
    //Determines if user sees userpage or login/registration
    loggedIn: false,
    //Will help prevent multiple requests to server
    loading: false,
    //Purely for fluff. Do not rely on this
    username: '',
    userData: [],
    //addPain will trigger the interactive body map
    addPain: false,
    //How many days worth of data to display; default: 7
    displayDate: initialDate.toString(),
    error: '',
    painLocation: ''
}

export default (state = initialState, action) => {
    //if(action.type === SOMETHING){return STATE CHANGE}
    if(action.type === USER_REQUEST || action.type === SUBMIT_PAIN_REQUEST){
        return Object.assign({}, state, {
            loading: true
        })
    }
    if(action.type === USER_LOGIN_SUCCESS){
        return Object.assign({}, state, {
            loggedIn: true,
            username: action.user,
            loading: false
        })
    }
    if(action.type === ADD_PAIN){
        return Object.assign({}, state, {
            addPain: true,
            painLocation: action.location
        })
    }
    if(action.type === SUBMIT_PAIN_SUCCESS){
        return Object.assign({}, state, {
            addPain: false
        })
    }

    if(action.type === REQUEST_PAIN_SUCCESS){
        return Object.assign({}, state, {
            loading: false,
            userData: action.result
        })
    }
    if(action.type === USER_LOGIN_ERROR || action.type === SUBMIT_PAIN_ERROR){
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        })
    }


    

    return state;
}