import React from 'react';
import './App.css';
import Child from'./Child';
//import contextValue from './ValueContext';


function Dad()
 {

    
  return  <div>
      <center>Valud received from Initiation source and passed to child</center>
      <Child></Child>
      <br/>
    <br/>
    
  </div> 
    
}

export default Dad;
