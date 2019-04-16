import React from 'react';
import './ViewButton.css'

export default function ViewButton(props){



    //changes from a front view to back (and vice versa)
    if(props.front){
    return (
          <div class="viewButtonContainer">
            <label htmlFor="viewButton">Change View:</label>
            <button name="viewButton" className='viewButton' onClick={e => props.handleClick(e)} type="button">Back</button>
          </div>
      )
    } else {
        return (
          <div class="viewButtonContainer">
            <label htmlFor="viewButton">Change View:</label>
            <button name="viewButton" className='viewButton' onClick={e => props.handleClick(e)} type="button">Front</button>
          </div>
        )
    }
}

