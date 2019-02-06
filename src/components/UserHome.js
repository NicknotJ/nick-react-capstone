import React, {Component} from 'react';
import ImageMapper from 'react-image-mapper';
import {connect} from 'react-redux';
import './UserHome.css';
import { submitPain, requestPain } from '../actions/pain';



class UserHome extends Component {
    handleClick(e){
        let data = {};
        data.location = e._id;
        data.username = this.props.username;
        console.log(data);
        this.props.dispatch(submitPain(data));
    }

    _onMouseClick(e) {
        console.log({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY});
    };

    componentDidMount(){
        let username= this.props.username;
        this.props.dispatch(requestPain(username));
    };

    //CUSTOMIZE THE COLORS! opaque is your length
    painColor(painLevel) {
        if(painLevel > 4){
            return 'rgba(255,0,0,.5)'
        } else if (painLevel < 2){
            return 'rgba(0,255,0,.5)'
        } else return 'rgba(0, 0, 255, .5)'
    }

    render(){

        
        const AREAS_MAP = { name: 'Body', areas: [
            {_id:'0', shape:'circle', coords: [160, 40, 30], preFillColor: this.painColor(5)},
            {_id: '1', shape: 'rect', coords: [120, 80, 165, 180], preFillColor: this.painColor(1.9)},
            {_id: '2', shape: 'rect', coords: [165, 80, 205, 180]},
            {_id: '3', shape: 'rect', coords: [125, 180, 200, 240]},
            {_id: '4', shape: 'rect', coords: [125, 241, 160, 385]},
            {_id: '5', shape: 'rect', coords: [165, 241, 200, 385], preFillColor: this.painColor(2.1)}]}
        return (
            <div onClick={e => {this._onMouseClick(e)}} role='container' className='UserHome'>
                <h3>{this.props.username}'s Pain Journal</h3>
                <div role='container' className='ImageWrapperContainer'>
                    <ImageMapper fillColor={'rgba(255, 0, 0, 0.25)'} onClick={e => {this.handleClick(e)}} className='ImageWrapper' active={true} src={'https://images.template.net/wp-content/uploads/2016/03/02042152/Free-Body-Diagram-Template-Download.jpg'} map={AREAS_MAP} />
                    <p>Click On The Image to Record Pain</p>
                </div>
            </div>
        )
    }
}

export const mapStateToProps = (state) => {
    console.log(state)
    return {loggedIn: state.reducer.loggedIn,
    username: state.reducer.username};
}
  
  
export default connect(mapStateToProps)(UserHome);