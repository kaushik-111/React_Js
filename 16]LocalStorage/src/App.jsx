import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LocalStorage from './Componets/LocalStorage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LocalStorage/>
    </>
  )
}

export default App
