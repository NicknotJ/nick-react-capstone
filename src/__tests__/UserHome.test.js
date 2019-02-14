import React from 'react';
import {shallow, mount} from 'enzyme';
import UserHome from '../components/UserHome';
import '../setupTests';

describe('<UserHome />', () => {
    it('Smoke Test', () => {
        shallow(<UserHome />)
    });
    // it('should contain a className of UserHome', () => {
    //     const wrapper = shallow(<UserHome />);
    //     expect(wrapper.hasClass('UserHome')).toEqual(true);
    // })
    
})