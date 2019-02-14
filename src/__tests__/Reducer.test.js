import React from 'react';
import {shallow, mount} from 'enzyme';
import Reducer, {initialState} from '../reducers/Reducer';
import {sevenDaysAgo} from '../time';
import { USER_LOGIN_SUCCESS, LANDING_PAGE_CLICK } from '../actions/user';
import { REQUEST_PAIN_SUCCESS } from '../actions/pain';

// const initialState = {
//     //Shuffles user to landing page (or allows them to bypass when false)
//     landingPage: true,
//     //Determines if user sees userpage or login/registration
//     loggedIn: false,
//     //Will help prevent multiple requests to server
//     loading: false,
//     //Purely for fluff. Do not rely on this
//     username: '',
//     userData: [],
//     //addPain triggers the buttons to add the pain
//     addPain: false,
  
//     displayDate: sevenDaysAgo,
//     message: 'Please Log In, Register, or Click the Image Above to Learn More',
//     painLocation: '',
//     token: null
// }

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
})



