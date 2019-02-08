import React from 'react';


export default function ChangeDate(props){


return (
    <form onChange={e => {this.onDisplayDateChange(e)}}>
        <select role='display-date' /*onChange={e => {this.onDisplayDateChange(e)}}*/>
            <option value="1">One Week</option>
            <option value="2">Two Weeks</option>
            <option value="3">One Month</option>
            <option value="4">Three Months</option>
            <option value="5">Six Months</option>
            <option value="6">One Year</option>
        </select>
    </form>
    )
}