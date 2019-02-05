import React from 'react';
import ReactDOM from 'react-dom';
import Journal from './Journal';
import {Provider} from 'react-redux';
import store from './store.js';

ReactDOM.render(
    <Provider store={store}>
        <Journal />
    </Provider>, 
    document.getElementById('root'));

