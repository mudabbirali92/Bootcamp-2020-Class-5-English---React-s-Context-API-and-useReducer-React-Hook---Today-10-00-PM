import React from 'react';
import './App.css';
import Child from'./Child';
import Child2 from'./Child2';
//import contextValue from './ValueContext';


function Dad()
 {

    
  return  <div>
      <center>Valud received from Initiation source and passed to child</center>
      <Child></Child>
      <Child2></Child2>
      <br/>
    <br/>
    
  </div> 
    
}

export default Dad;
