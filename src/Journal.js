import React, {Component} from 'react';
import './Journal.css';
import Banner from './components/Banner';
import StaticBody from './components/StaticBody';
import Login from './components/Login';
import Register from './components/Register';
import { connect } from 'react-redux';
import UserHome from './components/UserHome'; 
import Message from './components/UserHomeComponents/Message';
import LandingPage from './components/LandingPage.js';


export class Journal extends Component {
  render() {
    //call the actions that check the local storage...
    if(this.props.landingPage){
      return (
        <main>
          <LandingPage />
        </main>
      )
    } else if(this.props.loggedIn){
      return (
        <main>
          <UserHome />
        </main>
      )
    } else {
    return (
      <main>
        <div role='container' className="Journal">
          <Banner />
          <StaticBody />
          <Message />
          <div role='container' className='userInputs'>
            <Login />
            <Register />
          </div>
        </div>
      </main>
    );
  }}
}

export const mapStateToProps = (state) => {
  return {loggedIn: state.reducer.loggedIn,
          landingPage: state.reducer.landingPage,
          tutorial: state.reducer.tutorial
  };
}


export default connect(mapStateToProps)(Journal);