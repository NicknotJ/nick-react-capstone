import React from 'react';
import './ViewButton.css'

export default function ViewButton(props){



    //changes from a front view to back (and vice versa)
    return (
        
            <button className='viewButton' onClick={e => props.handleClick(e)} type="button">Change View</button>
    )
}

