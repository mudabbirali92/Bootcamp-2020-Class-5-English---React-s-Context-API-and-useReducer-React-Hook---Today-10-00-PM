import React from 'react';
import './App.css';
import contextValue from './ValueContext';

function Child()
 {    
  let val=React.useContext(contextValue);
    console.log("I got ",val);
    return <div>
  
             <center> Child has received value from Parent which is <strong>{val}</strong>  </center>
              
            
            </div>
    
}


export default Child;
