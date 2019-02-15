import React from 'react';
import {shallow, mount} from 'enzyme';
import Register from '../components/Register';
import '../setupTests';

describe('<Register />', () => {
    it('Smoke Test', () => {
        shallow(<Register />);
    })
})