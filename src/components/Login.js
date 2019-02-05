import React, {Component} from 'react';
import './Login.css';
import Input from './Input';
import {connect} from 'react-redux';
import {reduxForm, Field } from 'redux-form';
import {required, lengthRequirements, noWhiteSpace} from '../validators/user';
import {userLoginRequest} from '../actions/user';
const passwordLength = lengthRequirements({min: 7, max: 43});
const usernameLength = lengthRequirements({min: 2, max: 31});

export class Login extends Component{
    onSubmit(values) {
        //this should probably all be dispatches and actions
        const {username, password} = values;
        const user = {username, password};  
        this.props.dispatch(userLoginRequest())
        fetch(`http://localhost:8080/api/auth/login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        })
        .then(result => console.log(result))
    }

    // disabled(){
    //     return this.props.loading ? disabled : '';
    // }
    
    render() {
    return(
        <div role="container" className="loginContainer">
          <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
            <h5>Login</h5>
            <label htmlFor='username'>Username</label>
            <Field component={Input} type='username' name='username' element='input' validate={[required, usernameLength, noWhiteSpace]} />
            <label htmlFor='newPassword'>New Password</label>
            <Field component={Input} type='password' name='password' element='input' validate={[required, passwordLength, noWhiteSpace]} />
            <button type='submit' disabled={this.props.loading}>Confirm</button>
          </form>
        </div>
    )
    }
}

const mapStateToProps = state => ({
    loading: state.reducer.loading,
    loggedIn: state.reducer.loggedIn
});

Login = connect(mapStateToProps)(Login);

export default reduxForm({
    form: 'login'
})(Login);