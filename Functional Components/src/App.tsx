import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0);

    // Toggle 
    const [isOn, setIsOn] = useState(false);


    const [user, setUser] = useState(null);

    const toggleSwitch = () => {
        setIsOn((isOn) => !isOn);
    }

    const getToggleClass = () => {
        return isOn ? 'green' : 'red'
    };

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(data => setUser(data));
    }, []); //

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
            <h2>Functional Components: Demo</h2>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <div>
                <p>useState: Used to declare the count state and update it with setCount</p>
            </div>
            <div>
                <p>useEffect: Used to handle side effects, in this case, updating the document title.</p>
            </div>

            <h2>Toggle</h2>
            <div>
                <p>The light is {isOn ? 'On' : 'Off'}</p>
                <button className={getToggleClass()} onClick={toggleSwitch}>
                    {isOn ? 'Turn Off' : 'Turn On'}
                </button>
            </div>
            <div>
                <h3>Explanation:</h3>
                <p>
                    useState manages the isOn state.
                </p>
                <p> toggleSwitch toggles the state between true and false.</p>
            </div>

            <div>
                <h3>Component with useEffect Hook by calling an API:</h3>
                <h4>User details fetched by API</h4>
                <div>
                    <h4>{user.name}</h4>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                </div>
            </div>
        </>
    )
}

export default App
