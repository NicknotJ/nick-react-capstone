import {USER_LOGIN_ERROR, USER_REQUEST, USER_LOGIN_SUCCESS} from '../actions/user';


const initialState = {
    //Determines if user sees userpage or login/registration
    loggedIn: false,
    //Will help prevent multiple requests to server
    loading: false,
    //Purely for fluff. Do not rely on this
    username: '',
    userData: '',
    //addPain will trigger the interactive body map
    addPain: false,
    //How many days worth of data to display; default: 7
    display: 7,
    error: ''
}

export default (state = initialState, action) => {
    //if(action.type === SOMETHING){return STATE CHANGE}
    if(action.type === USER_REQUEST){
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
    if(action.type === USER_LOGIN_ERROR){
        return Object.assign({}, state, {
            error: action.error
        })
    }
    return state;
}