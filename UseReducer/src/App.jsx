import { React, useState, useReducer } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const counterReducer = (stated, dispatchd) => {
  switch (dispatchd.typed) {
    case 'increment':
      return { countd: stated.countd + 1 };
    case 'decrement':
      return { countd: stated.countd - 1 };
    case 'reset':
      return { countd: 0 };
    case 'double':
      return { countd: stated.countd * stated.countd };
    default:
      return stated;
  }
};

function App() {
  const [count, setCount] = useState(0);
  const [type, setType] = useState('');
  const [stated, dispatchd] = useReducer(counterReducer, { countd: 0 });

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div>
          <h3>Explanation:</h3>

          <div>
            <h1>Count: {stated.countd}</h1>
            <button onClick={() => dispatchd({ typed: 'increment' })}>
              Increment
            </button>
            <button onClick={() => dispatchd({ typed: 'decrement' })}>
              Decrement
            </button>
            <button onClick={() => dispatchd({ typed: 'reset' })}>Reset</button>
            <button onClick={() => dispatchd({ typed: 'double' })}>
              Double
            </button>
          </div>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
