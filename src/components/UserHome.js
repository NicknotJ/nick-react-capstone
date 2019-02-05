import React, {Component} from 'react';
import ImageMapper from 'react-image-mapper';
import {connect} from 'react-redux';
import './UserHome.css';



class UserHome extends Component {
    handleClick(e){
        let data = {};
        data.location = e._id;
        data.username = this.props.username;
        console.log(data);
        return fetch('http://localhost:8080/api/pain', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
        }) 
        .then(data => console.log(JSON.stringify(data)))
        .catch(error => console.log(error))
    }
    render(){
        const AREAS_MAP = { name: 'Body', areas: [{_id:'0', shape:'circle', coords: [160, 40, 30]} ,{_id: '1', shape: 'rect', coords: [100, 80, 210, 180]}]}
        return (
            <div role='container' className='UserHome'>
                <h3>{this.props.username}'s Pain Journal</h3>
                <div role='container' className='ImageWrapperContainer'>
                    <ImageMapper onClick={e => {this.handleClick(e)}} className='ImageWrapper' active={true} src={'https://images.template.net/wp-content/uploads/2016/03/02042152/Free-Body-Diagram-Template-Download.jpg'} map={AREAS_MAP} />
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