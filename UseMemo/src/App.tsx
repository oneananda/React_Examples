import { useState,useMemo } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {

  const [nameLength, setNameLength] = useState<number>(5);

    // Sample users list with explicit typing
    const users: User[] = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Catherine' },
      { id: 3, name: 'Alexander' },
      { id: 4, name: 'Marie' },
      { id: 5, name: 'Isabella' }
    ];

    const longNamedUsers = useMemo(() => {
      console.log('Filtering users with long names...');
      return users.filter(user => user.name.length > nameLength);
    }, [users, nameLength]);  

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
          <label>
            Name length threshold:
            <input
              type="number"
              value={nameLength}
              onChange={(e) => setNameLength(Number(e.target.value))}
            />
          </label>
        </div>

        <h2>Total Users: {users.length}</h2>
        <h2>Users with name longer than {nameLength} characters: {longNamedUsers.length}</h2>

        <ul>
          {longNamedUsers.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
