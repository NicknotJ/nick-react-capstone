import React from 'react';
import './Journal.css';
import Banner from './components/Banner';
import StaticBody from './components/StaticBody';
import Login from './components/Login';
import Register from './components/Register';
import { connect } from 'react-redux';
import UserHome from './components/UserHome'; 



class Journal extends React.Component {
  render() {
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
          <Login />
          <Register />
      </div>
    );
  }}
}

export const mapStateToProps = (state) => {
  return {loggedIn: state.reducer.loggedIn};
}


export default connect(mapStateToProps)(Journal);