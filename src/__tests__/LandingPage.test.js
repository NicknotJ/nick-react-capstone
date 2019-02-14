import React from 'react';
import {shallow, mount} from 'enzyme';
import {LandingPage} from '../components/LandingPage';
import '../setupTests';


describe('<LandingPage />', () => {
    it('Should Render without Crashing', () => {
        shallow(<LandingPage />);
    });
    it('Should dispatch(landingPageClick) onClick', () => {
        const callback = jest.fn();
        //dispatch normally comes from connect, but we're simulating it here
        const wrapper = mount(<LandingPage dispatch={callback} />);
        wrapper.find('.test').simulate('click');
        expect(callback).toHaveBeenCalled();
    });
    it('Should have classes: landingPageWrapper', () => {
        const wrapper = shallow(<LandingPage />);
        expect(wrapper.hasClass('landingPageWrapper')).toEqual(true);
    });

    it('Should have a class: landingImageCopy', () => {
        const wrapper = shallow(<LandingPage  />);
        expect(wrapper.find('landingImageCopy').exists());
    });
    it('Should have a class: test', () => {
        const wrapper = shallow(<LandingPage />);
        expect(wrapper.find('test').exists());
    });
})