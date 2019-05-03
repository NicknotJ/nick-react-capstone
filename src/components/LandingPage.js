import React, {Component} from 'react';
import './LandingPage.css'
import {connect} from 'react-redux';
import { landingPageClick } from '../actions/user';

export class LandingPage extends Component{

    //function: changes redux state for LandingPage to false onClick
    imgSource(){
        const imageSrc =  require('../images/body-front-withData.png');
        return imageSrc;
    }

    onClick(){
        this.props.dispatch(landingPageClick());
    }

    render(){
        return (
        <main className='landingPageWrapper'>
          <header>
            <h1>Ouch, My Everything</h1>
            <h2>Your Online Pain Journal</h2>
            <h3>Easily Record and View Your Pain Data in 2-3 Clicks</h3>
          </header>
          <section className='landingImageCopy'>
            <img className='test' onClick={e => {this.onClick()}} alt='Click me to enter the site' src={this.imgSource()} /> 
            <div className='landingInformation'>
              <p>Tired of writing down all your nagging pains?</p>
              <p>Then you'll love "Ouch, My Everything!"</p>
              <p>Click on the body, then on a rating button. You're already done!</p>
              <h3>Enter the site by clicking on the image!</h3>
              <p style={{'fontStyle': 'italic'}}>"Ouch, My Everything" does not provide medical advice. If suffering severe pain, please contact your doctor or another health care professional.</p>
            </div>
          </section>
        </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        landingPage: state.reducer.landingPage
    };
  }
  
  
  export default connect(mapStateToProps)(LandingPage);