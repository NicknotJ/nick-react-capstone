import React from 'react';
import './StaticBody.css';
import { required } from '../validators/user';
export default function StaticBody(props){
const staticImage = require('../images/Free-Body-Diagram-Template-Download.jpg');

return (
  <div role='container' className='imgContainer'>
    <img alt='Static Image of Human Body' src={staticImage}/>
  </div>
  )
}
