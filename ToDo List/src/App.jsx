import React, { useState } from 'react';

export function App(props) {
  const [newTodo, setNewTodo] = useState('');

  const addToDo = () => {};

  return (
    <div className='App'>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>React Todo List</h1>
        <input
          type='text'
          placeholder='Enter a new task...'
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          style={{ padding: '10px', width: '200px' }}
        />
        <button onClick={addToDo} />
      </div>
    </div>
  );
}

// Log to console
console.log('Hello console');
