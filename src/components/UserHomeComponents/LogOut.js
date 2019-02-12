import React from 'react';
import {connect} from 'react-redux';

export function LogOut(props){

    //the button below will log out and reset the state to the initial state
    return (
        <div role='logout'>
            <button type="submit">Logout</button>
        </div>
    )
}

export const mapStateToProps = (state) => {
    return {
        loggedIn: state.reducer.loggedIn
    }
}

export default connect(mapStateToProps)(LogOut)