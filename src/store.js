import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';

const initialState = {
    //Determines if user sees userpage or login/registration
    loggedin: false,
    userName: '',
    userData: '',
    //addPain will trigger the interactive body map
    addPain: false,
    //How many days worth of data to display; default: 7
    display: 7
}


export default createStore( combineReducers({form: formReducer}, applyMiddleware(thunk)), 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );