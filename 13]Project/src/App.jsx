import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import From_Validation from './Componets/From_Validation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <From_Validation/>
    </>
  )
}

export default App
