import React from 'react';
import {shallow, mount, mockImplentation} from 'enzyme';
import {requestPainFailure, submitPainError ,SET_PAIN_LOCATION, setPainLocation, ADD_PAIN, addPain, SUBMIT_PAIN_REQUEST, SUBMIT_PAIN_SUCCESS, SUBMIT_PAIN_ERROR, submitPain, REQUEST_PAIN_SUCCESS, REQUEST_PAIN_FAILURE, requestPain, requestPainSuccess} from '../actions/pain';
import '../setupTests';
import {API_BASE_URL} from '../config';

describe('SET_PAIN_LOCATION', () => {
    it('should return the location', () => {
        const location = '1';
        const action = setPainLocation(location);
        expect(action.type).toEqual(SET_PAIN_LOCATION);
        expect(action.location).toEqual(location);
    })
})

describe('ADD_PAIN', () => {
    it('should return the location', () => {
        const location = '1';
        const action = addPain(location);
        expect(action.type).toEqual(ADD_PAIN);
        expect(action.location).toEqual(location);
    })
})

describe('SUBMIT_PAIN_ERROR', () => {
    it('should return the error', () => {
        const error = 'Imma error';
        const action = submitPainError(error);
        expect(action.type).toEqual(SUBMIT_PAIN_ERROR);
        expect(action.error).toEqual(error);
    })
})

describe('REQUEST_PAIN_SUCCESS', () => {
    it('should return the result', () => {
        const result = 'a bunch of data';
        const action = requestPainSuccess(result);
        expect(action.type).toEqual(REQUEST_PAIN_SUCCESS);
        expect(action.result).toEqual(result);
    })
})

describe('REQUEST_PAIN_FAILURE', () => {
    it('should return the error', () => {
        const error = 'Imma error';
        const action = requestPainFailure(error);
        expect(action.type).toEqual(REQUEST_PAIN_FAILURE);
        expect(action.error).toEqual(error);
    })
})
describe('requestPain', () => {
    it('should dispatch requestPainSuccess', () => {
        const painData = [{pain: 5, name: 'ouch'}, {pain: 10, name: 'owie'}];
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                json(){
                    return painData;
                }
            })
        })
        const dispatch = jest.fn();
        const token = 'Imma token';
        return requestPain(token)(dispatch).then(()=> {
            expect(fetch).toHaveBeenCalledWith(
                `${API_BASE_URL}/pain/`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
        })
    })
})