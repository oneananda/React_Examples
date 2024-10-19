import { useEffect ,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);


  return (
    <>
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
    </>
  )
}

export default App
