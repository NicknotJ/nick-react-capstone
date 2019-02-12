import React, {Component} from 'react';
import ImageMapper from 'react-image-mapper';
import {connect} from 'react-redux';
import './UserHome.css';
import { submitPain, requestPain, addPain } from '../actions/pain';
import {userLogout} from '../actions/user';
import { changeDisplayTime } from '../actions/time';
import moment from 'moment';
import {sevenDaysAgo, fourteenDaysAgo, oneMonthAgo, threeMonthsAgo, sixMonthsAgo, oneYearAgo } from '../time';
import ChangeDate from './UserHomeComponents/ChangeDate';
import RatePain from './UserHomeComponents/RatePain';
import Message from './UserHomeComponents/Message';
import {loadToken, clearToken} from '../local-storage';
import {LogOut} from './UserHomeComponents/LogOut';
class UserHome extends Component {
    constructor(props){
        super(props);
    this.state = {
        displayValue: sevenDaysAgo._d,
        displayError: '',
        isDisplayError: false,
        days: 7
    }
    this.onDisplayDateChange = this.onDisplayDateChange.bind(this);
}
    componentDidMount(){
        console.log(`componentDidMount`);
        this.props.dispatch(requestPain(loadToken()));
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
        this.props.dispatch(submitPain(data, loadToken()));
        
        this.props.dispatch(requestPain(loadToken()));
        }
    }
    //Check this (testing only)
    _onMouseClick(e) {
        console.log({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY});
    };

    onDisplayDateChange(e){
        console.log(this.state);
        let time;
        let days;
        if(e.target.value === 'One Week'){
          time = sevenDaysAgo._d;
          days = 7;
        } 
        if(e.target.value === 'Two Weeks'){
          time = fourteenDaysAgo._d;
          days = 14;
        }
        if(e.target.value === 'One Month'){
          time = oneMonthAgo._d;
          days = 30.42;    
        }
        if(e.target.value === 'Three Months'){
          time = threeMonthsAgo._d;
          days = 91.25;    
        }
        if(e.target.value === 'Six Months'){
          time = sixMonthsAgo;
          days = 182.5;    
        }
        if(e.target.value === 'One Year'){
          time = oneYearAgo;
          days = 365;    
        }
        this.setState({displayValue: time, days: days}, () => {
        console.log("SetState's Callback Function.", this.state)})
    }

  

    //CUSTOMIZE THE COLORS! opaque is your length
    //filter (only the pains with the correct id)
    filterPain(data, location){
        if(!data){
            //if there is no data
            return undefined;
        }
        let filteredData = data.filter(piece => piece.location === String(location));
        if(filteredData.length === 0){
            return undefined;
        } else {
            return filteredData
           
    }}

    //filters the remaining pains from filterPain based on the selected display date
    filterDate(data, date){
        if(!data){
            return undefined;
        }
        let filteredData = data.filter(piece => {
            return (moment(piece.date).diff(this.state.displayValue, 'days') > 0)
        })
        if(filteredData.length === 0){
            return undefined;
        } else {
            return filteredData
        }
    }

    averageDate(data){
        if(!data){
          return undefined;
        }
        //We should have the days from filteredData
        let numberDays = this.state.days;
        let average = data.length/numberDays;
        return average;
    }

    averagePain(data){
        if(!data){
          return undefined;
        }
        let sum = 0;
        let i;
        for(i = 0; i < data.length; i++){
            sum = sum + data[i].painLevel;
        }
        return (sum / i)
    }

    painShade(painData){
        if(!painData){
            return undefined
        } else if (painData > .9){
            return ' .9)';
        } else if (painData > .75){
            return ' .75)';
        } else if (painData > .5){
            return ' .5)';
        } else if (painData > .25){
            return ' .25)';
        } else if (painData > .1){
            return ' .1)';
        } else return ' .05)';
    }


    loadingImg(){
        const AREAS_MAP = { name: 'Body', areas: [
            {_id:'0', shape:'circle', coords: [160, 40, 30], preFillColor: this.preFillFill(0, this.props.userData)},
            {_id: '1', shape: 'rect', coords: [120, 80, 165, 180], preFillColor: this.preFillFill(1, this.props.userData)},
            {_id: '2', shape: 'rect', coords: [165, 80, 205, 180], preFillColor: this.preFillFill(2, this.props.userData)},
            {_id: '3', shape: 'rect', coords: [125, 180, 200, 240], preFillColor: this.preFillFill(3, this.props.userData)},
            {_id: '4', shape: 'rect', coords: [125, 241, 160, 385], preFillColor: this.preFillFill(4, this.props.userData)},
            {_id: '5', shape: 'rect', coords: [165, 241, 200, 385], preFillColor: this.preFillFill(5, this.props.userData)}]}
        if(this.props.loading){
        return (
            <img alt='Loading Placeholder' src='https://3wga6448744j404mpt11pbx4-wpengine.netdna-ssl.com/wp-content/uploads/2015/05/InternetSlowdown_Day.gif'/>
        )
        } else {
            return (
                <ImageMapper fillColor={'rgba(255, 0, 0, 0.25)'} onClick={e => {this.handleClick(e)}} className='ImageWrapper' active={true} src={'https://images.template.net/wp-content/uploads/2016/03/02042152/Free-Body-Diagram-Template-Download.jpg'} map={AREAS_MAP} />
            )
        }
    }
   
    painColor(painLevel) {
        if(!painLevel){
            return undefined
        } else if(painLevel > 4){
            return 'rgba(255,0,0,'
        } else if (painLevel > 2.01){
            return 'rgba(0,255,0,'
        } else return 'rgba(0, 0, 255,'
    }

    preFillFill(location, userData){
    let rgbaValue; //returned value for color/shade
    let locationFilteredData; //will be filtered on location
    let filteredData; //will be filtered based on date
    let averagePain;
    let averageLength;
    locationFilteredData = this.filterPain(userData, location);
    filteredData = this.filterDate(locationFilteredData, this.state.displayValue); //filtered based on display date
    averagePain = this.averagePain(filteredData);
    averageLength = this.averageDate(filteredData);
    rgbaValue = this.painColor(averagePain);
    rgbaValue = rgbaValue + this.painShade(averageLength);
    console.log(rgbaValue);
    return rgbaValue;
    }

    handleLogout(e){
        e.preventDefault();
        clearToken();
        this.props.dispatch(userLogout())
        //dispatch action to change loggedIn to false. Reset to initial state.
    }
    
    render(){

        
       
        return (
            <div onClick={e => {this._onMouseClick(e)}} role='container' className='UserHome'>
                <h3>{this.props.username}'s Pain Journal</h3>
                <ChangeDate onDisplayChange={e => this.onDisplayDateChange(e)}/>
                {this.displayError()}
                <div role='image-container' className='ImageWrapperContainer'>
                    {this.loadingImg()}
                    <p>Click On The Image to Select Pain Location</p>
                    <RatePain handleSubmit={(e, num) => {this.handleSubmit(e, num)}}/>
                    <p>Afterwards, click on a button above to rate the pain</p>
                    <p>The scale is from 1 (weakest) to 5 (strongest)</p>
                </div>
                <LogOut handleClick={e => this.handleLogout(e)} />
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
    displayDate: state.reducer.displayDate,
    loading: state.reducer.loading
};
}
  
  
export default connect(mapStateToProps)(UserHome);