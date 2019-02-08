import React from 'react';

export default function ChangeDate(props){


return (
    <form >
        <select role='display-date' onChange={e => {props.onDisplayChange(e)}}>
            <option>One Week</option>
            <option>Two Weeks</option>
            <option>One Month</option>
            <option>Three Months</option>
            <option>Six Months</option>
            <option>One Year</option>
        </select>
    </form>
    )
}