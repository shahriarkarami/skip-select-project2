import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SkipSelectPage from "./pages/SkipSelectPage.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
          <SkipSelectPage />
      </div>


  )
}

export default App
