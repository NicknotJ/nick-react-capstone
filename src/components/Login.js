import React from 'react';
import './Login.css';

export default function Login(props){

    return(
      <div role='container' className='loginContainer'>
        <form className='loginForm'>
            <h5>Login</h5>
            <input type='text' defaultValue='Type UserName Here'></input>
            <input type='text' defaultValue='Type Password Here'></input>
            <button>Confirm</button>
        </form>
      </div>
    )
}