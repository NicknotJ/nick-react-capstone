import React from 'react';
import './LogOut.css';
export function LogOut(props){



    //the button below will log out and reset the state to the initial state
    return (
        <div className='logoutWrapper'>
            <button onClick={e => props.handleClick(e)} type="button">Logout</button>
        </div>
    )
}