import React from 'react';
import {shallow, mount} from 'enzyme';
import {tutorialClick, TUTORIAL_CLICK, userLogin, USER_LOGIN_SUCCESS, userLoginSuccess, USER_LOGIN_ERROR, userLoginError} from '../actions/user';
import {API_BASE_URL} from '../config';
import '../setupTests';

describe('userLoginSuccess', () => {
    it('Should have a user and have a type of USER_LOGIN_SUCCESS', () => {
      let user = 'user'
      const action = userLoginSuccess(user);
      expect(action.type).toEqual(USER_LOGIN_SUCCESS);
      expect(action.user).toEqual(user);
    })
})

describe('userLoginError', () => {
    it('Should have an error and have a type of USER_LOGIN_ERROR', () => {
    let error = 'Imma error';
    const action = userLoginError(error);
    expect(action.type).toEqual(USER_LOGIN_ERROR);
    expect(action.error).toEqual(error);
    })
})

describe('tutorialClick', () => {
    it('should have a number and have a type of TUTORIAL_CLICK', () => {
        let number = 1;
        const action = tutorialClick(number);
        expect(action.type).toEqual(TUTORIAL_CLICK);
        expect(action.number).toEqual(number);
    })
})
