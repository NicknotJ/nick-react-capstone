//login and registration actions
 
export const USER_REQUEST = 'USER_LOGIN_REQUEST';
export const userRequest = () => ({
    type: USER_REQUEST
});

//Allow the user to submit more pain?
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const userLoginSuccess = user => ({
    type: USER_LOGIN_SUCCESS,
    user
});

//Should display a meaningful error to the user
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const userLoginError = error => ({
    type: USER_LOGIN_ERROR,
    error
});

export const userLogin = user => dispatch => {
    dispatch(userRequest());
    fetch('http://localhost:8080/api/auth/login', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    })
    .then(result => {
        if(!result.ok){
            return Promise.reject(result.statusText);
        }
        return result.json();
    })
    .then(res => {
        console.log(res);
        console.log(user);
        dispatch(userLoginSuccess(user.username));
    })
    //below is untested
    .catch(err => {
                console.log(err);
                dispatch(userLoginError(err))
    })
}

export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const userRegisterSuccess = () => ({
    type: USER_REGISTER_SUCCESS
});

export const USER_REGISTER_ERROR = 'USER_REGISTER_ERROR';
export const userRegisterError = error => ({
    type: USER_REGISTER_ERROR,
    error
})

export const userRegister = newUser => dispatch => {
    dispatch(userRequest());
    fetch('http://localhost:8080/api/users', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newUser)
    })
    .then(response => {
        if(!response.ok){
            return Promise.reject(response.statusText);
        }
        response.json()})
    .then(res => dispatch(userLoginSuccess(res.username)))
    .catch(err => {
        console.log(err);
        dispatch(userRegisterError(err))
})
}