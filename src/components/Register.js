import React, {Component} from 'react';
import './Register.css';
import Input from './Input';
import {reduxForm, Field } from 'redux-form';
import {required} from '../validators/user.js';

//Import Validators later

export class Register extends Component{
    onSubmit(values) {
        console.log(values);
        const username = values.newUsername;
        const password = values.newPassword;
        const newUser = {username, password};
        fetch(`http://localhost:8080/api/users`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newUser)
        })
        .then(response => response.json())
        .then(res => console.log(res))
    }

    render() {
    return(
        <div role="container" className="registerContainer">
          <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
            <h5>New User</h5>
            <label htmlFor='newUsername'>New UserName</label>
            <Field component={Input} type='text' name='newUsername' element='input' validate={[required]}  />
            <label htmlFor='newPassword'>New Password</label>
            <Field component={Input} type='text' name='newPassword' element='input' validate={[required]} />
            <button type='submit'>Confirm</button>
          </form>
        </div>
    )
    }
}

export default reduxForm({
    form: 'register'
})(Register);