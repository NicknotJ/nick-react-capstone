import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import reducer from './reducers/Reducer.js';

export default createStore( combineReducers({reducer, form: formReducer}, applyMiddleware(thunk)), 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );