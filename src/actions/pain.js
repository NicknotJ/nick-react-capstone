import {API_BASE_URL} from '../config';

// //add pain action
// //display actions


export const ADD_PAIN = 'ADD_PAIN'
export const addPain = () => ({
    type: ADD_PAIN
});

// //Lockout the user from submitting more pain?
export const SUBMIT_PAIN_REQUEST = 'SUBMIT_PAIN_REQUEST';
export const submitPainRequest = () => ({
    type: SUBMIT_PAIN_REQUEST
});

//Allow the user to submit more pain?
export const SUBMIT_PAIN_SUCCESS = 'SUBMIT_PAIN_SUCCESS';
export const submitPainSuccess = () => ({
    type: SUBMIT_PAIN_SUCCESS

});

//Should display a meaningful error to the user
export const SUBMIT_PAIN_ERROR = 'SUBMIT_PAIN_ERROR';
export const submitPainError = error => ({
    type: SUBMIT_PAIN_ERROR,
    payload: error
});

export const submitPain = pain => dispatch => {
    dispatch(submitPainRequest())
    return fetch(`${API_BASE_URL}/pain`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(pain)
    })
    .then(res => {
     if(!res.ok){
           return Promise.reject(res)
}
        return res.json()
    })
    .then(result => {
        dispatch(submitPainSuccess(result));
    })
    .catch(error => {
        dispatch(submitPainError(error));
    })
};

export const REQUEST_PAIN_SUCCESS = 'REQUEST_PAIN_SUCCESS';
export const requestPainSuccess = result => ({
    type: REQUEST_PAIN_SUCCESS,
    result
});

export const REQUEST_PAIN_FAILURE = 'REQUEST_PAIN_FAILURE';
export const requestPainFailure = error => ({
    type: REQUEST_PAIN_FAILURE,
    error
})

//Security Issues
export const requestPain = username => dispatch => {
    dispatch(submitPainRequest())
    return fetch(`${API_BASE_URL}/pain/?searchTerm=${username}`, {
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      },
    })
    .then(res => {
     if(!res.ok){
           return Promise.reject(res)
}
        return res.json()
    })
    .then(result => {
        console.log('The following is the result');
        console.log(result);
        dispatch(requestPainSuccess(result));
        
    })
    .catch(error => {
        // dispatch(requestPainError(error));
        console.log(error);
    })
};

