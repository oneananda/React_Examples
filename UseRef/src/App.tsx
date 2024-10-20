import { useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
    const inputEl = useRef(null);

    const buttonEl = useRef(null);
    // Toggle
    const [isTextFocussed, setIsTextFocussed] = useState(false);

    const handleFocus = () => {
        const nextFocusState = !isTextFocussed;
        setIsTextFocussed(nextFocusState);
        nextFocusState ? inputEl.current.focus() : buttonEl.current.focus();
    };

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
                    <input
                        ref={inputEl}
                        type="text"
                        placeholder="Click the button to focus me"
                    />
                    <button ref={buttonEl} onClick={handleFocus}>
                        {isTextFocussed ? 'Take away the focus' : 'Focus the input'}
                    </button>
                </div>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
