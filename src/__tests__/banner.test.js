import React from 'react';
import {shallow, mount} from 'enzyme';
import Banner from '../components/Banner';
import '../setupTests';


describe('<Banner />', () => {
    it('Smoke Test', () => {
        shallow(<Banner />)
    })
})