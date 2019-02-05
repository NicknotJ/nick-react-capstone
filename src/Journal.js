import React from 'react';
import './Journal.css';
import Banner from './components/Banner';
import StaticBody from './components/StaticBody';
import Login from './components/Login';
import Register from './components/Register';
import { connect } from 'react-redux';



class Journal extends React.Component {
  render() {
    return (
      <div className="Journal">
          <Banner />
          <StaticBody />
          <Login />
          <Register />
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {loggedIn: state.loggedIn};
}


export default connect(mapStateToProps)(Journal);