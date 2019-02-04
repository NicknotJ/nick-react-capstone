import React from 'react';
import ReactDOM from 'react-dom';
import Journal from './Journal';
import {Provider} from 'react-redux';
import Store from './store.js';

ReactDOM.render(<Provider store={Store}><Journal /></Provider>, document.getElementById('root'));

