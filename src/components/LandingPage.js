import React, {Component} from 'react';
import './LandingPage.css'
import {connect} from 'react-redux';
import { landingPageClick } from '../actions/user';

class LandingPage extends Component{

    //function: changes redux state for LandingPage to false onClick
    imgSource(){
        const imageSrc =  require('../images/Body-Diagram-Front.jpg');
        return imageSrc;
    }

    onClick(){
        this.props.dispatch(landingPageClick());
    }

    render(){
        return (
        <div>
          <header>
            <h1>Ouch, My Everything</h1>
            <h2>Your Online Pain Journal</h2>
            <h3>Easily Record and View Your Pain Data in 2-3 Clicks</h3>
          </header>
          <div role='container' className='landingPageWrapper'>
            <img onClick={e => {this.onClick()}} alt='Click me to enter the site' src={this.imgSource()} /> 
            <p>Tired of writing down all your nagging pains?</p>
            <p>Worried that you'll forget something important before doctor visits?</p>
            <p>Want an easy overview of both your various pains' intensities AND frequencies?</p>
            <h5>If so, click on the image to the right to learn more!</h5>
            <p style={{'fontStyle': 'italic'}}>"Ouch, My Everything" does not provide medical advice. If suffering severe pain, please contact your doctor or another health care professional.</p>
          </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        landingPage: state.reducer.landingPage
    };
  }
  
  
  export default connect(mapStateToProps)(LandingPage);