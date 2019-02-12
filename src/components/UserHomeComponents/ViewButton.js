import React from 'react';


export default function ViewButton(props){



    //changes from a front view to back (and vice versa)
    return (
        <div className='ViewContainer' role='container'>
            <button onClick={e => props.handleClick(e)} type="button">Change View</button>
        </div>
    )
}

