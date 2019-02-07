import React, {Component} from 'react';
import ImageMapper from 'react-image-mapper';
import {connect} from 'react-redux';
import './UserHome.css';
import { submitPain, requestPain, addPain } from '../actions/pain';
import { changeDisplayTime } from '../actions/time';
import moment from 'moment';
import {sevenDaysAgo, fourteenDaysAgo, oneMonthAgo, threeMonthsAgo, sixMonthsAgo, oneYearAgo } from '../time';

class UserHome extends Component {
    componentDidMount(){
        let username= this.props.username;
        console.log(`componentDidMount, username is ${username}`);
        this.props.dispatch(requestPain(username));
    };

    handleClick(e){
        let data = {};
        data.location = e._id;
        data.username = this.props.username;
        this.props.dispatch(addPain(data.location));
    }

    handleSubmit(e, num){
        let date = moment();
        let painLevel = num;
        let location = this.props.painLocation;
        let username = this.props.username;
        let data = {painLevel, location, username, date};
        this.props.dispatch(submitPain(data));
        this.props.dispatch(requestPain(data.username));
    }

    _onMouseClick(e) {
        console.log({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY});
    };

    onDisplayDateChange(e){
        console.log(e.target.value);
    }
  

    //CUSTOMIZE THE COLORS! opaque is your length
    //filter (only the pains with the correct id)
    filterPain(data, location){
        let filteredData = data.filter(piece => piece.location === String(location));
        if(filteredData.length === 0){
            return undefined;
        } else {
            return filteredData
            //this will return filteredData eventually
    }}

    //filters the remaining pains from filterPain based on the selected display date
    filterDate(data, date){
        if(!data){
            return undefined;
        }
        console.log(date.toISOString());
        console.log(data[0].date);
        let filteredData = data.filter(piece => piece.date > date.toISOString());
        if(filteredData.length === 0){
            return undefined;
        } else {
            return filteredData[0].painLevel;
        }
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
        return this.painColor(this.filterDate(this.filterPain(this.props.userData, location), this.props.displayDate._d));
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
                <form onChange={e => {this.onDisplayDateChange(e)}}>
                    <select role='display-date' /*onChange={e => {this.onDisplayDateChange(e)}}*/>
                        <option value={sevenDaysAgo}>One Week</option>
                        <option value={fourteenDaysAgo}>Two Weeks</option>
                        <option value={oneMonthAgo}>One Month</option>
                        <option value={threeMonthsAgo}>Three Months</option>
                        <option value={sixMonthsAgo}>Six Months</option>
                        <option value={oneYearAgo}>One Year</option>
                    </select>
                </form>
                <div role='image-container' className='ImageWrapperContainer'>
                    <ImageMapper fillColor={'rgba(255, 0, 0, 0.25)'} onClick={e => {this.handleClick(e)}} className='ImageWrapper' active={true} src={'https://images.template.net/wp-content/uploads/2016/03/02042152/Free-Body-Diagram-Template-Download.jpg'} map={AREAS_MAP} />
                    <p>Click On The Image to Select Pain Location</p>
                    <div role='rate-pain'>
                        <button onClick={e => {this.handleSubmit(e, 1)}} type='submit' disabled={!this.props.addPain} value='1'>1</button>
                        <button onClick={e => {this.handleSubmit(e, 2)}} type='submit' disabled={!this.props.addPain} value='2'>2</button>
                        <button onClick={e => {this.handleSubmit(e, 3)}} type='submit' disabled={!this.props.addPain} value='3'>3</button>
                        <button onClick={e => {this.handleSubmit(e, 4)}} type='submit' disabled={!this.props.addPain} value='4'>4</button>
                        <button onClick={e => {this.handleSubmit(e, 5)}} type='submit' disabled={!this.props.addPain} value='5'>5</button>
                    </div>
                    <p>Afterwards, click on a button above to rate the pain</p>
                </div>
            </div>
        )
    }
}

export const mapStateToProps = (state) => {
    console.log(state)
    return {loggedIn: state.reducer.loggedIn,
    username: state.reducer.username,
    userData: state.reducer.userData,
    addPain: state.reducer.addPain,
    painLocation: state.reducer.painLocation,
    displayDate: state.reducer.displayDate};
}
  
  
export default connect(mapStateToProps)(UserHome);