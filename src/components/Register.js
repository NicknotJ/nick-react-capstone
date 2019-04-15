import React, {Component} from 'react';
import './Register.css';
import Input from './Input';
import { connect } from 'react-redux';
import {reduxForm, Field } from 'redux-form';
import {required, lengthRequirements, noWhiteSpace} from '../validators/user.js';
import { userRegister } from '../actions/user.js';
const passwordLength = lengthRequirements({min: 7, max: 43});
const usernameLength = lengthRequirements({min: 2, max: 31});

export class Register extends Component{
    onSubmit(values) {
        const username = values.newUsername;
        const password = values.newPassword;
        const newUser = {username, password};
        this.props.dispatch(userRegister(newUser));
    }
    render() {
    return(
        <div className="registerContainer">
          <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
            <fieldset>
            <legend>New User Form</legend>
              <h3>Register</h3>
              <label htmlFor='newUsername'>New UserName</label>
              <Field component={Input} type='text' className= 'newUserName' name='newUsername' element='input' validate={[required, usernameLength, noWhiteSpace]}  />
              <label htmlFor='newPassword'>New Password</label>
              <Field component={Input} type='password' className= 'newPassword' name='newPassword' element='input' validate={[required, passwordLength, noWhiteSpace]} />
              <button type='submit' disabled={this.props.loading}>Confirm</button>
            </fieldset>
          </form>
        </div>
    )
    }
}

const mapStateToProps = state => ({
    loading: state.reducer.loading,
    loggedIn: state.reducer.loggedIn
});

Register = connect(mapStateToProps)(Register);

export default reduxForm({
    form: 'register'
})(Register);