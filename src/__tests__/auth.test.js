import React from 'react';
import {shallow, mount} from 'enzyme';
import {SET_AUTH_TOKEN, CLEAR_AUTH, AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, setAuthToken, clearAuth, authRequest, authSuccess, authError} from '../actions/auth';
import '../setupTests';


describe('SET_AUTH_TOKEN', () => {
    it('should return the auth token', () => {
        const token = 'tokenexample';
        const action = setAuthToken(token);
        expect(action.type).toEqual(SET_AUTH_TOKEN);
        expect(action.authToken).toEqual(token);
    });
});

describe('AUTH_SUCCESS', () => {
    it('Should return a username', () => {
        const username = 'BilboTest';
        const action = authSuccess(username);
        expect(action.type).toEqual(AUTH_SUCCESS);
        expect(action.username).toEqual(username);
    })
})

describe('AUTH_ERROR', () => {
    it('Should return an error', () => {
        const error = 'I am an error';
        const action = authError(error);
        expect(action.type).toEqual(AUTH_ERROR);
        expect(action.error).toEqual(error);
    })
})

