import React from 'react';
import {shallow, mount} from 'enzyme';
import '../setupTests';
import {API_BASE_URL} from '../config';
import {Login} from '../components/Login';


describe('<Login />', () => {
    it('Smoke Test', () => {
        shallow(<Login />);
    })
})
