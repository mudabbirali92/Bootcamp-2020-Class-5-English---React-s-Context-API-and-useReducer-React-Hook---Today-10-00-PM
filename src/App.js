import React from 'react';
import Dad from './Parent';
import './App.css';
import './bg.css';


function App() {
  let[numbers,setNum]=React.useState(0);

function increases()
{

  setNum(++numbers);
}

  return <div className="room back">
    <center><p>Value initiated</p></center>
    <br/>
  
    <Dad number = {numbers}>
     
      </Dad>
      <br/>
    <br/>
    <center><button onClick={increases}>UPDATE</button></center>

  </div>
    
}

export default App;
