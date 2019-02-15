import React from 'react';
import {shallow, mount} from 'enzyme';
import {RatePain} from '../components/UserHomeComponents/RatePain';
import '../setupTests';

describe('<RatePain />', () => {
    it('Smoke Test', () => {
        shallow(<RatePain />);
    })
    it('Should call function onClick', () => {
        const spy = jest.fn();
        const wrapper = shallow(<RatePain handleSubmit={spy} />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(3).simulate('click');
        wrapper.find('button').at(4).simulate('click');
        expect(spy).toHaveBeenCalledTimes(5);
    })
})
