import React from 'react';
import './Register.css';

export default function Register(props){

    return(
        <div role="container" className="registerContainer">
          <form>
            <h5>I'm a register!</h5>
            <input type='text' defaultValue='Type New UserName'></input>
            <input type='text' defaultValue='Type New Password'></input>
            <button>Confirm</button>
          </form>
        </div>
    )
}
