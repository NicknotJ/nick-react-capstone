import React from 'react';
import {shallow, mount} from 'enzyme';
import {Journal} from '../Journal';
import {LandingPage} from '../components/LandingPage'
import '../setupTests';

describe('<Journal />', () => {
    it('Smoke Test', () => {
        shallow(<Journal />);
    });
    // it('Should return LandingPage if landingPage = true', () => {
    //     const landingPage = true;
    //     const wrapper = shallow(<Journal landingPage={landingPage} />).dive();
    //     expect(wrapper.find(LandingPage)).to.have.lengthOf(1);
    // })
});