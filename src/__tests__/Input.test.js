import React from 'react';
import {shallow, mount} from 'enzyme';
import Input from '../components/Input';
import '../setupTests';

const metaProps = {
  touched: false, error: false, warning: false
}

const inputProps = {
    name:'Idunno'
}

describe('<Input />', () => {
    it('Smoke Test', () => {
        shallow(<Input meta={metaProps} input={inputProps} element={() => {}}/>);
    })
})