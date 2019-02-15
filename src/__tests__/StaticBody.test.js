import React from 'react';
import {shallow, mount} from 'enzyme';
import StaticBody from '../components/StaticBody';
import '../setupTests';

describe('<StaticBody />', () => {
    it('Smoke Test', () => {
        shallow(<StaticBody />)
    })
})
