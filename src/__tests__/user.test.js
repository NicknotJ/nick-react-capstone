import React from 'react';
import {shallow, mount} from 'enzyme';
import {userLogin, USER_LOGIN_SUCCESS, userLoginSuccess, USER_LOGIN_ERROR, userLoginError} from '../actions/user';
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

// describe('userLogin', () => {
//     it('should dispatch fetch with...', () => {
//         const user = {username: "hello", password: "password123"};
//         global.fetch = jest.fn().mockImplementation(() => {
//             return Promise.resolve({
//                 ok: true,
//                 json(){
//                     return user;
//                 }
//             })
//         })
//         const dispatch = jest.fn();
//         return userLogin(user)(dispatch).then(() => {
//             expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/auth/login`, {
//                 method: "POST",
//                 headers: {"Content-Type": "application/json"},
//                 body: JSON.stringify(user)
//             })
//         })

//     })
        
// })