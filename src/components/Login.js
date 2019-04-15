import React, {Component} from 'react';
import './Login.css';
import Input from './Input';
import {connect} from 'react-redux';
import {reduxForm, Field } from 'redux-form';
import {required, lengthRequirements, noWhiteSpace} from '../validators/user';
import {userLogin} from '../actions/user';


const passwordLength = lengthRequirements({min: 7, max: 43});
const usernameLength = lengthRequirements({min: 2, max: 31});

export class Login extends Component{
    onSubmit(values) {

        const {username, password} = values;
        const user = {username, password};
        this.props.dispatch(userLogin(user));
    }
    render() {
    return(
        <div className="loginContainer">
          <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
            <fieldset>
              <legend>Login Form</legend>
                <h3>Login</h3>
                <label htmlFor='username-login'>UserName</label>
                <Field component={Input} id='username-login' type='username' name='username' element='input' validate={[required, usernameLength, noWhiteSpace]} />
                <label htmlFor='password-login'>Password</label>
                <Field component={Input} id='password-login' type='password' name='password' element='input' validate={[required, passwordLength, noWhiteSpace]} />
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

Login = connect(mapStateToProps)(Login);

export default reduxForm({
    form: 'login'
})(Login);