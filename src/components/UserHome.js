import React, {Component} from 'react';
import ImageMapper from 'react-image-mapper';
import {connect} from 'react-redux';
import './UserHome.css';
import { submitPain } from '../actions/pain';



class UserHome extends Component {
    handleClick(e){
        let data = {};
        data.location = e._id;
        data.username = this.props.username;
        console.log(data);
        this.props.dispatch(submitPain(data));
    }
    render(){
        const AREAS_MAP = { name: 'Body', areas: [{_id:'0', shape:'circle', coords: [160, 40, 30]} ,{_id: '1', shape: 'rect', coords: [100, 80, 210, 180]}]}
        return (
            <div role='container' className='UserHome'>
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