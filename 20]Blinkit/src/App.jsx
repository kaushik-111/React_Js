import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Card.css'
import Card from './Components/Card'
import Product from './Components/Product'
import './product.css'
import Dairy_Bread_Eggs from './Components/Dairy_Bread_Eggs'
import './Dairy_Bread_Eggs.css'
import Snacks_Munchies from './Components/Snacks_Munchies'
import Hookah from './Components/Hookah'
import Mouth_Fresheners from './Components/Mouth_Fresheners'
import Cold_Drinks_Juices from './Components/Cold_Drinks_Juices'
import Candies_Gums from './Components/Candies_Gums'
import Footer from './Components/Footer'
import './Footer.css'
import Navbar from './Components/Navbar'
import './Navbar.css'
function App() {

  return (
    <>
    <Navbar/>
    <Card/>
    <Product/>
    <Dairy_Bread_Eggs/>
    <Snacks_Munchies/>
    <Hookah/>
    <Mouth_Fresheners/>
    <Cold_Drinks_Juices/>
    <Candies_Gums/>
    <Footer/>
    
    </>
  )
}

export default App
