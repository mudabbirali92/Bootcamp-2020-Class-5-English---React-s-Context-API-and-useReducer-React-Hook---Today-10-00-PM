import React from 'react';
import Dad from './Parent';
import './App.css';
import './bg.css';
import contextValue from './ValueContext';


function App() {
  //let[numbers,setNum]=React.useState(0);
let [values,setValues]=React.useState(0);
function increases()
{

  setValues(++values);
}
console.log("source has ",values);
  return ( 
  // we created context at global level
  <contextValue.Provider value={values}>
   <div className="room back">
    <center><p>Value initiated</p></center>
    <br/>
      <Dad></Dad>
      <br/>
    <br/>
    <center><button onClick={increases}>UPDATE</button></center>

  </div>
  </contextValue.Provider>
  
  )};

export default App;
