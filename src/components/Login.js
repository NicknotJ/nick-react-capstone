import React, {Component} from 'react';
import './Login.css';
import Input from './Input';
import {reduxForm, Field } from 'redux-form';

//Import Validators later

export class Login extends Component{
    onSubmit(values) {
        console.log(values);
        //This will send a post request to the server to check username+password    
        //Will send back a JWT token if correct
    }
    render() {
    return(
        <div role="container" className="loginContainer">
          <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
            <h5>I'm a login!</h5>
            <label htmlFor='userName'>UserName</label>
            <Field component={Input} type='text' name='UserName' element='input' />
            <label htmlFor='newPassword'>New Password</label>
            <Field component={Input} type='text' name='Password' element='input' />
            <button type='submit'>Confirm</button>
          </form>
        </div>
    )
    }
}

export default reduxForm({
    form: 'login'
})(Login);