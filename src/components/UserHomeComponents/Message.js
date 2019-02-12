import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Message.css'

export class Message extends Component{
    render(){
    if(this.props.message){
      return (        
      <div role='container' className='messageContainer'>
        <span role='message'>{this.props.message}</span>
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