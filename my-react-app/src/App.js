import React, { useState } from 'react';

import logo from './logo.svg';
import { Greetting } from './Greetting';
import { CongratulationsMessage } from './CongratulationsMessage';
import { PeopleList } from './PeopleList';
import { CounterButton } from './CounterButton';
import './App.css';

const people = [{
  name: 'Buba',
  age: 28,
  hairColor: 'brown',
}, {
  name: 'Papa',
  age: 25,
  hairColor: 'black',
}, {
  name: 'Joy',
  age: 35,
  hairColor: 'yellow',
}];

function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
    

  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <div className="App">
      <header className="App-header">
        <CongratulationsMessage numberOfClicks={numberOfClicks} threshold={10} />
        <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks} />
        <Greetting name="Papa" numberOfMessages={100} />
        <PeopleList people={people} />
        <button onClick={() => alert('Hello!')}>Click Me!</button>
        {/* <p>
          Thsi is so {adjective}
        </p> */}
        {/* <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>  */}
      </header>
    </div>
  );
}

export default App;
