import React from 'react';
import './App.css';
import contextValue from './ValueContext';

function Child()
 {    
  let val=React.useContext(contextValue);
    console.log("I got ",val);
    return <div>
  
             <center> Child1 is dummy  </center>
              
            
            </div>
    
}


export default Child;
