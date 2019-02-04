import React, { Component } from 'react';
import './Journal.css';
import Banner from './components/Banner';
import StaticBody from './components/StaticBody';
import Login from './components/Login';
import Register from './components/Register';


class Journal extends Component {
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

export default Journal;
