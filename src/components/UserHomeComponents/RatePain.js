import React from 'react';
import {connect} from 'react-redux';

export function RatePain(props){


    return (
        <div role='rate-pain'>
            <button onClick={e => {props.handleSubmit(e, 1)}} type='submit' disabled={!props.addPain} value='1'>1</button>
            <button onClick={e => {props.handleSubmit(e, 2)}} type='submit' disabled={!props.addPain} value='2'>2</button>
            <button onClick={e => {props.handleSubmit(e, 3)}} type='submit' disabled={!props.addPain} value='3'>3</button>
            <button onClick={e => {props.handleSubmit(e, 4)}} type='submit' disabled={!props.addPain} value='4'>4</button>
            <button onClick={e => {props.handleSubmit(e, 5)}} type='submit' disabled={!props.addPain} value='5'>5</button>
        </div>
    )
}

export const mapStateToProps = (state) => {
    return {
        addPain: state.reducer.addPain
    }
}

export default connect(mapStateToProps)(RatePain)