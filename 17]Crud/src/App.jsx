import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Crud from './Componets/Crud'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Crud/>
    </>
  )
}

export default App
