import React, {Component} from 'react';
import ImageMapper from 'react-image-mapper';
import {connect} from 'react-redux';
import './UserHome.css';
import { submitPain, requestPain, addPain } from '../actions/pain';
import { changeDisplayTime } from '../actions/time';
import moment from 'moment';
import {sevenDaysAgo, fourteenDaysAgo, oneMonthAgo, threeMonthsAgo, sixMonthsAgo, oneYearAgo } from '../time';
import ChangeDate from './UserHomeComponents/ChangeDate';
import RatePain from './UserHomeComponents/RatePain'

class UserHome extends Component {
    constructor(props){
        super(props);
    this.state = {
        displayValue: sevenDaysAgo._d,
        displayError: '',
        isDisplayError: false
    }
    this.onDisplayDateChange = this.onDisplayDateChange.bind(this);
}
    componentDidMount(){
        let username= this.props.username;
        console.log(`componentDidMount, username is ${username}`);
        this.props.dispatch(requestPain(username));
    };

    displayError(){
        if(this.state.displayError){
            return (
                <div className='errorMessage' role='container'>
                    <p>{this.state.displayError}</p>
                </div>
            )
        }
    };

    handleClick(e){
        let data = {};
        data.location = e._id;
        data.username = this.props.username;
        this.setState({
            displayError: '',
            isDisplayError: false
        })
        this.props.dispatch(addPain(data.location));
    }

    handleSubmit(e, num){
        //Need to filter by location, then check if dates match. If match,
        //return setState={displayError: 'Please wait until tomorrow to rate that location again'}
        // let today = moment();
        // let otherDay = moment(this.props.userData[0].date);
        //today.diff(otherDay, 'days'));
        //if today.diff(~~~~) === 0 {return this.setState(displayError: 'Please wait till tomorrow to rate that location again')}
        let location = this.props.painLocation;
        let date = moment();
        let locationFiltered = this.filterPain(this.props.userData, location);
        console.log(locationFiltered);
        let isSame;
        if(locationFiltered){
            console.log('we will compare times!');
            let today = moment();
            locationFiltered.forEach(data => {
                let otherDay = moment(data.date);
                if(today.diff(otherDay, 'days') === 0){
                    console.log('the if is runnin!')
                    isSame = true;
                    console.log(isSame);
                }
                }
            )
        }
        if(isSame){
            return this.setState({
                isDisplayError: true,
                displayError: 'Please wait until tomorrow to rate that location again'
            });
        } else {
        let painLevel = num;
        let username = this.props.username;
        let data = {painLevel, location, username, date};
        this.props.dispatch(submitPain(data));
        this.props.dispatch(requestPain(data.username));
        }
    }

    _onMouseClick(e) {
        console.log({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY});
    };

    onDisplayDateChange(e){
        console.log(this.state);
        //getting back One Week, Two Weeks, One Month, etc. etc. 
        console.log(e.target.value === 'One Week');
        console.log(e.target.value);
        if(e.target.value === 'One Week'){
          console.log('One Week ran');
          this.setState({
            displayValue: sevenDaysAgo._d
          })
        } 
        if('Two Weeks' === e.target.value){
          console.log('Two Weeks Ran');
          this.setState({
            displayValue: fourteenDaysAgo._d
          })
        }
        if('One Month' === e.target.value){
          console.log('One Month Ran');
          this.setState({
            displayValue: oneMonthAgo._d
          })
        }
        if('Three Months' === e.target.value){
          this.setState({
            displayValue: threeMonthsAgo._d
          })
        }
        if('Six Months' === e.target.value){
          this.setState({
            displayValue: sixMonthsAgo._d
          })
        }
        if('One Year' === e.target.value){
          this.setState({
            displayValue: oneYearAgo._d
          })
        }
        console.log(this.state);
        console.log(this.filterDate(this.props.userData, this.state.displayValue));
    }

  

    //CUSTOMIZE THE COLORS! opaque is your length
    //filter (only the pains with the correct id)
    filterPain(data, location){
        let filteredData = data.filter(piece => piece.location === String(location));
        if(filteredData.length === 0){
            return undefined;
        } else {
            return filteredData
           
    }}

    //filters the remaining pains from filterPain based on the selected display date
    filterDate(data, date){
        if(!data){
            console.log('No Data!');
            return undefined;
        }
        let filteredData = data.filter(piece => {
            console.log(moment(piece.date).diff(date, 'days'));
            return (moment(piece.date).diff(this.state.displayValue, 'days') > 0)
        })
        if(filteredData.length === 0){
            console.log('Nothing made it through')
            return undefined;
        } else {
            return filteredData
        }
    }

    averagePain(data){
        let sum = 0;
        let i;
        for(i = 0; i < data.length; i++){
            sum = sum + data.painLevel;
        }
        return (sum / i)
    }

    //function to average out filteredData. Probably use a forLoop/forEach and use the i value at the end to dvide
    //painColor can return a string like 'rgba(255, 0, 0, and painShade can return .5)'
    painColor(painLevel) {
        if(!painLevel){
            return undefined
        } else if(painLevel > 4){
            return 'rgba(255,0,0,.5)'
        } else if (painLevel > 2.01){
            return 'rgba(0,255,0,.5)'
        } else return 'rgba(0, 0, 255, .5)'
    }

    preFillFill(location){
    }
    render(){

        
        const AREAS_MAP = { name: 'Body', areas: [
            {_id:'0', shape:'circle', coords: [160, 40, 30], preFillColor: this.preFillFill(0) },
            {_id: '1', shape: 'rect', coords: [120, 80, 165, 180], preFillColor: this.preFillFill(1)},
            {_id: '2', shape: 'rect', coords: [165, 80, 205, 180], preFillColor: this.preFillFill(2)},
            {_id: '3', shape: 'rect', coords: [125, 180, 200, 240], preFillColor: this.preFillFill(3)},
            {_id: '4', shape: 'rect', coords: [125, 241, 160, 385], preFillColor: this.preFillFill(4)},
            {_id: '5', shape: 'rect', coords: [165, 241, 200, 385], preFillColor: this.preFillFill(5)}]}
        return (
            <div onClick={e => {this._onMouseClick(e)}} role='container' className='UserHome'>
                <h3>{this.props.username}'s Pain Journal</h3>
                <ChangeDate onDisplayChange={e => this.onDisplayDateChange(e)}/>
                {this.displayError()}
                <div role='image-container' className='ImageWrapperContainer'>
                    <ImageMapper fillColor={'rgba(255, 0, 0, 0.25)'} onClick={e => {this.handleClick(e)}} className='ImageWrapper' active={true} src={'https://images.template.net/wp-content/uploads/2016/03/02042152/Free-Body-Diagram-Template-Download.jpg'} map={AREAS_MAP} />
                    <p>Click On The Image to Select Pain Location</p>
                    <RatePain handleSubmit={(e, num) => {this.handleSubmit(e, num)}}/>
                    <p>Afterwards, click on a button above to rate the pain</p>
                </div>
            </div>
        )
    }
}

export const mapStateToProps = (state) => {
    return {loggedIn: state.reducer.loggedIn,
    username: state.reducer.username,
    userData: state.reducer.userData,
    addPain: state.reducer.addPain,
    painLocation: state.reducer.painLocation,
    displayDate: state.reducer.displayDate};
}
  
  
export default connect(mapStateToProps)(UserHome);