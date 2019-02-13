import React from 'react';
import {shallow, mount} from 'enzyme';
import Journal from '../Journal';


describe('<Journal />', () => {
    it('Renders without crashing', () => {
        shallow(<Journal />);
    });
});