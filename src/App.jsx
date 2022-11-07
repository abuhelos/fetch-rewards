import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FormPage from './components/FormPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FormPage />
    </div>
  )
}

export default App
