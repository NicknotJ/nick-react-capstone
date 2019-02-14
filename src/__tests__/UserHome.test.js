import React from 'react';
import {shallow, mount} from 'enzyme';
import {UserHome} from '../components/UserHome';
import '../setupTests';

describe('<UserHome />', () => {
    it('Smoke Test', () => {
        const dispatch = jest.fn();
        shallow(<UserHome dispatch={dispatch}/>)
    });
})