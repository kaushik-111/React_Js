import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Controlled from './Components/Controlled'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Controlled/>
    </>
  )
}

export default App
