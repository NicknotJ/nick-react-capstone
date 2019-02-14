import React from 'react';
import {shallow, mount} from 'enzyme';
import ChangeDate from '../components/UserHomeComponents/ChangeDate';
import '../setupTests';

describe('<ChangeDate /', () => {
    it('Smoke Test', () => {
        shallow(<ChangeDate />)
    })
})