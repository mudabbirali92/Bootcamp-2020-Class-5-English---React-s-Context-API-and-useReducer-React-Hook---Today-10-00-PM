import React from 'react';
import './App.css';
import Child from './Child.js';

function Dad(props)
 {

    console.log("I am in Parent and I got ",props.number)
  return  <div>
      <center>Valud received from Initiation source and passed to child</center>
      <br/>
    <br/>
      <Child numbers= {props.number}></Child>
  </div> 
    
}

export default Dad;
