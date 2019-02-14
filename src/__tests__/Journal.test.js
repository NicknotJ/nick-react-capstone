import React from 'react';
import {shallow, mount} from 'enzyme';
import Journal from '../Journal';
import LandingPage from '../components/LandingPage'
import '../setupTests';

describe('<Journal />', () => {
    it('Smoke Test', () => {
        shallow(<Journal />);
    });
});