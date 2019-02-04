import React, {Component} from 'react';
import './Login.css';
import Input from './Input';
import {reduxForm, Field } from 'redux-form';

//Import Validators later

export class Login extends Component{

    render() {
    return(
        <div role="container" className="loginContainer">
          <form>
            <h5>I'm a login!</h5>
            <label htmlFor='userName'>UserName</label>
            <Field component={Input} type='text' name='UserName' element='input' />
            <label htmlFor='newPassword'>New Password</label>
            <Field component={Input} type='text' name='Password' element='input' />
            <button>Confirm</button>
          </form>
        </div>
    )
    }
}

export default reduxForm({
    form: 'login'
})(Login);