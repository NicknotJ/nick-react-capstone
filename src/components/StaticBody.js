import React, {Component} from 'react';
import './StaticBody.css';
import {connect} from 'react-redux';
import {tutorialClick} from '../actions/user';

export class StaticBody extends Component{
  displayImage(){
    const staticImage = require('../images/Free-Body-Diagram-Template-Download.jpg');
    const sourceImg1 = require('../images/TutorialImage1.png');
    const sourceImg2 = require('../images/TutorialImage2.png');
    const sourceImg3 = require('../images/TutorialImage3.png');
    const sourceImg4 = require('../images/TutorialImage4.png');
    if(this.props.tutorial === 0){
      return staticImage;
    } else if(this.props.tutorial === 1){
      return sourceImg1;
    } else if(this.props.tutorial === 2){
      return sourceImg2;
    } else if(this.props.tutorial === 3){
      return sourceImg3;
    } else{
      return sourceImg4;
    }
    }
  displayText(){
    if(this.props.tutorial === 0){
      return (<h1>Brief Tutorial for "Ouch, My Everything"</h1>)
    } else if(this.props.tutorial === 1){
      return (<h3>First, create a new user and/or login!</h3>);
    } else if(this.props.tutorial === 2){
      return (<h3>Next, select a location where you feel pain by clicking/touching</h3>);
    } else if(this.props.tutorial === 3){
      return (<h3>After that, you can click on one of the below buttons with the amount of pain increasing from 1 to 5</h3>);
    } else{
      return (<h3>By default, you will see your pain data displayed for the past seven days. Please use the drop down menu to change to fourteen days, one month, or even longer</h3>)
    }
  }

render(){
return (
  <div role='container' className='imgContainer'>
    {this.displayText()}
    <img onClick={e => {this.props.dispatch(tutorialClick(1))}} alt='Static Image of Human Body' className='tutorialImage' src={this.displayImage()}/>
    <h3>Click above to start/continue Tutorial!</h3>
  </div>
  )
}
}

const mapStateToProps = state => ({
  tutorial: state.reducer.tutorial
});

export default StaticBody = connect(mapStateToProps)(StaticBody);
  
