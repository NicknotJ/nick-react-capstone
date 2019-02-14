import React from 'react';
import {shallow, mount} from 'enzyme';
import Reducer, {initialState} from '../reducers/Reducer';
import {sevenDaysAgo} from '../time';
import { USER_LOGIN_SUCCESS, LANDING_PAGE_CLICK, USER_REQUEST, USER_LOGOUT_REQUEST } from '../actions/user';
import { REQUEST_PAIN_SUCCESS, SUBMIT_PAIN_REQUEST, ADD_PAIN, SUBMIT_PAIN_SUCCESS } from '../actions/pain';


describe('Reducer', () => {
    it('should set the initial state when nothing is passed in', () => {
        const state = Reducer(undefined, {});
        expect(state).toEqual(initialState);
    })

    it('should return the current state on an unknown action', () => {
        const state = Reducer(undefined, {type: 'Unknown'});
        expect(state).toEqual(initialState);
    })
    it('should handle USER_LOGIN_SUCCESS', () => {
        let username = 'BilboBaggins';
        const state = Reducer(undefined, {type: USER_LOGIN_SUCCESS, user: username});
        expect(state.username).toEqual(username)
        expect(state.loggedIn).toEqual(true);
        expect(state.loading).toEqual(false);
    })
    it('should handle REQUEST_PAIN_SUCCESS', () => {
        let userData = ['ouch', 'I hurt'];
        const state = Reducer(undefined, {type: REQUEST_PAIN_SUCCESS, result: userData});
        expect(state.userData).toEqual(userData);
    })
    it('should handle LANDING_PAGE_CLICK', () => {
        const state = Reducer(undefined, {type: LANDING_PAGE_CLICK});
        expect(state.landingPage).toEqual(false)
    })
    it('should handle USER_REQUEST', () => {
        const state = Reducer(undefined, {type: USER_REQUEST});
        expect(state.loading).toEqual(true);
    })
    it('should handle SUBMIT_PAIN_REQUEST', () => {
        const state = Reducer(undefined, {type: SUBMIT_PAIN_REQUEST});
        expect(state.loading).toEqual(true);
    })
    it('should handle USER_LOGOUT_REQUEST', () => {
        const state = Reducer(undefined, {type: USER_LOGOUT_REQUEST});
        expect(state.loading).toEqual(true);
    })
    it('should handle ADD_PAIN', () => {
        const location = '1';
        const state = Reducer(undefined, {type: ADD_PAIN, location: location });
        expect(state.addPain).toEqual(true);
        expect(state.painLocation).toEqual(location);
    })
    it('should handle SUBMIT_PAIN_SUCCESS', () => {
        const state = Reducer(undefined, {type: SUBMIT_PAIN_SUCCESS});
        expect(state.addPain).toEqual(false);
    })
    it('should handle REQUEST_PAIN_SUCCESS', () => {
        const result = ['I am data', 'As am I'];
        const state = Reducer(undefined, {type: REQUEST_PAIN_SUCCESS, result});
        expect(state.userData).toEqual(result);

    })
})



