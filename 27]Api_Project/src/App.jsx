import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductApi from './Components/ProductApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProductApi/>
    </>
  )
}

export default App
