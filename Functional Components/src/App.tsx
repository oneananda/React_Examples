import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0);

    // Toggle 
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn((isOn) => !isOn);
    }

    const getToggleClass = () => {
        return isOn ? 'green' : 'red'
    };

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);


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
        </>
    )
}

export default App
