import React, {Component} from 'react';
import './Register.css';
import Input from './Input';
import {reduxForm, Field } from 'redux-form';

//Import Validators later

export class Register extends Component{
    onSubmit(values) {
        console.log(values);
        //This will send a post request to the server to create a new user
    }

    render() {
    return(
        <div role="container" className="registerContainer">
          <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
            <h5>I'm a register!</h5>
            <label htmlFor='newUserName'>New UserName</label>
            <Field component={Input} type='text' name='newUserName' element='input' defaultValue='Type New UserName' />
            <label htmlFor='newPassword'>New Password</label>
            <Field component={Input} type='text' name='newPassword' element='input' defaultValue='Type New Password' />
            <button type='submit'>Confirm</button>
          </form>
        </div>
    )
    }
}

export default reduxForm({
    form: 'register'
})(Register);