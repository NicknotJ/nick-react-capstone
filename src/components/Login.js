import React, {Component} from 'react';
import './Login.css';
import Input from './Input';
import {reduxForm, Field } from 'redux-form';
import {required, lengthRequirements} from '../validators/user';
const passwordLength = lengthRequirements({min: 7, max: 43});
const usernameLength = lengthRequirements({min: 2, max: 31});
export class Login extends Component{
    onSubmit(values) {
        const {username, password} = values;
        const user = {username, password};
        console.log(`username: ${values.username} password: ${values.password}`)
    }
    render() {
    return(
        <div role="container" className="loginContainer">
          <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
            <h5>Login</h5>
            <label htmlFor='username'>Username</label>
            <Field component={Input} type='username' name='username' element='input' validate={[required, usernameLength]} />
            <label htmlFor='newPassword'>New Password</label>
            <Field component={Input} type='password' name='password' element='input' validate={[required, passwordLength]} />
            <button type='submit'>Confirm</button>
          </form>
        </div>
    )
    }
}

export default reduxForm({
    form: 'login'
})(Login);