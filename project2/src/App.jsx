import React from 'react';
import './App.css';
import Addition from './Addition';
import Subtraction from './Subtraction';

function App() {
  return (
    <div>
      <h3>Addition</h3>
      <Addition numberOne={12} numberTwo={8} />
      <Addition numberOne={5456} numberTwo={738} />
      <Addition numberOne={1223} numberTwo={738} />

      <h3>Subtraction</h3>
      <Subtraction numberOne={5637} numberTwo={2344} />
      <Subtraction numberOne={7} numberTwo={12} />
      <Subtraction numberOne={3000} numberTwo={847} />
    </div>
  );
}

export default App;
