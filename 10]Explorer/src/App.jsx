import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Explorer from './components/Explorer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Explorer/>
    </>
  )
}

export default App
