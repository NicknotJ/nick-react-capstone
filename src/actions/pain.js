// //add pain action
// //display actions

// //Lockout the user from submitting more pain? 
// export const SUBMIT_PAIN_REQUEST = 'SUBMIT_PAIN_REQUEST';
// export const submitPainRequest = () => ({
//     type: SUBMIT_PAIN_REQUEST
// });

// //Allow the user to submit more pain?
// export const SUBMIT_PAIN_SUCCESS = 'SUBMIT_PAIN_SUCCESS';
// export const submitPainSuccess = () => ({
//     type: SUBMIT_PAIN_SUCCESS

// });

// //Should display a meaningful error to the user
// export const SUBMIT_PAIN_ERROR = 'SUBMIT_PAIN_ERROR';
// export const submitPainError = error => ({
//     type: SUBMIT_PAIN_ERROR,
//     payload: error
// });

// export const submitPain = pain => dispatch => {
//     //dispatch(submitPainRequest())
//     return fetch('http://localhost:8080/api/pain', {
//       method: "POST",
//       headers: {
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify(pain)
//     })
//     .then(res => {
//         return res.json()
//     })
//     .then(result => {
//         dispatch(submitPainSuccess(result));
//     })
//     .catch(error => {
//         dispatch(submitPainError(error));
//     })
// };