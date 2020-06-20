import React from 'react';
import './App.css';

function Child(props)
 {    
  
    console.log("I got ",props.numbers);
    return <div>
  
             <center> Child has received value from Parent which is <strong>{props.numbers}</strong>  </center>
              
            
            </div>
    
}


export default Child;
