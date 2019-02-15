import React from 'react';
import {shallow, mount} from 'enzyme';
import Message from '../components/UserHomeComponents/Message';
import '../setupTests';

describe('<Message />', () => {
    it('Smoke Test', () => {
        shallow(<Message />);
    })
})
