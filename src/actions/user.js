//login and registration actions
 
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const userLoginRequest = () => ({
    type: USER_LOGIN_REQUEST
});

//Allow the user to submit more pain?
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const userLoginSuccess = () => ({
    type: USER_LOGIN_SUCCESS
});

//Should display a meaningful error to the user
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const userLoginError = error => ({
    type: USER_LOGIN_ERROR,
    payload: error
});