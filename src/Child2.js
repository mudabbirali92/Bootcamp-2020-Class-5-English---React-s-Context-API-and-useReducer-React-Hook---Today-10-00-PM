import React from 'react';
import './App.css';
//import contextValue from './ValueContext';
import reducer from './numberReducer';

function Child2()
 {    
  //let val=React.useContext(contextValue); this time instead of context we will use reducer....
  let [state, dispatch] = React.useReducer(reducer,0);// same like React.useState()

function increasing()
{
dispatch({type:"increment"});

}
function decreamenting()
{
dispatch({type:"decrement"});

}


    console.log("I got ",state);
    return <div>
  
             <center> Child 2 has received value from Parent which is <strong>{state}</strong>  </center>
              <center><button onClick={increasing}>INCREASE</button></center>
              <br/>
              <center><button onClick={decreamenting}>DECREASE</button></center>
            
            </div>
    
}


export default Child2;
