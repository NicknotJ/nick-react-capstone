import React from 'react';
import './ChangeDate.css'

export default function ChangeDate(props){

return (
        <select className='selectDate' onChange={e => {props.onDisplayChange(e)}}>
            <option>One Week</option>
            <option>Two Weeks</option>
            <option>One Month</option>
            <option>Three Months</option>
            <option>Six Months</option>
            <option>One Year</option>
        </select>
    )
}