import React from 'react';
import Dad from './Parent';
import './App.css';
import './bg.css';
//import contextValue from './ValueContext';
//import reducer from './numberReducer';

function App() {

//let [values,setValues]=React.useState(0);
// function increases()
// {

//   setValues(++values);
// }
// we have commented out the above cuz we are going to use useReducer in child 2.js so no need of increemnt over here

//console.log("source has ",values);
  return ( 
  // we created context at global level
//  <contextValue.Provider value={values}>
   <div className="room back">
    <center><p>Value initiated</p></center>
    <br/>
      <Dad></Dad>
      <br/>
    <br/>
   

  </div>
 // </contextValue.Provider>
  
  )};

export default App;
