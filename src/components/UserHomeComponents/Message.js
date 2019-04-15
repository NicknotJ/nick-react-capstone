import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Message.css'

export class Message extends Component{
    render(){
    if(this.props.message){
      return (        
      <div role='status' className='messageContainer'>
        <span><p>{this.props.message}</p></span>
      </div>)
    } else {
      return null;
    }
    }
}

const mapStateToProps = state => ({
    message: state.reducer.message
});

export default Message = connect(mapStateToProps)(Message)