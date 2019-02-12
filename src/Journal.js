import React from 'react';
import './Journal.css';
import Banner from './components/Banner';
import StaticBody from './components/StaticBody';
import Login from './components/Login';
import Register from './components/Register';
import { connect } from 'react-redux';
import UserHome from './components/UserHome'; 
import Message from './components/UserHomeComponents/Message';


class Journal extends React.Component {
  render() {
    //call the actions that check the local storage...
    if(this.props.loggedIn){
      return (
        <div className="UserHomePage">
          <UserHome />
        </div>
      )
    } else {
    return (
      <div className="Journal">
          <Banner />
          <StaticBody />
          <Message />
          <div className='userInputs'>
            <Login />
            <Register />
          </div>
      </div>
    );
  }}
}

export const mapStateToProps = (state) => {
  return {loggedIn: state.reducer.loggedIn};
}


export default connect(mapStateToProps)(Journal);