import React from 'react';
import {shallow, mount} from 'enzyme';
import {LogOut} from '../components/UserHomeComponents/LogOut';
import '../setupTests';

describe('<LogOut />', () => {
    it('Smoke Test', () => {
        shallow(<LogOut />)
    })
    it('should call handleClick on click', () => {
        let spy = jest.fn();
        const wrapper = shallow(<LogOut handleClick={spy} />);
        wrapper.find('button').simulate('click')
        expect(spy).toHaveBeenCalled();
    })
})