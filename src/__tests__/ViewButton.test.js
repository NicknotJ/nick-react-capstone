import React from 'react';
import {shallow, mount} from 'enzyme';
import ViewButton from '../components/UserHomeComponents/ViewButton';
import '../setupTests';

describe('<ViewButton />', () => {
    it('Smoke Test', () => {
        shallow(<ViewButton />);
    })
    it('Should call call onClick onClick', () => {
        const spy = jest.fn();
        const wrapper = shallow(<ViewButton handleClick={spy}/>);
        wrapper.find('button').simulate('click');
        expect(spy).toHaveBeenCalled();

    })
})