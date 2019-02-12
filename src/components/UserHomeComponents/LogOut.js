import React from 'react';

export function LogOut(props){



    //the button below will log out and reset the state to the initial state
    return (
        <div role='logout'>
            <button onClick={e => props.handleClick(e)} type="button">Logout</button>
        </div>
    )
}