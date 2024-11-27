import React from 'react'
import Candies_Gums1 from './Candies_Gums1'

export default function Candies_Gums() {
    const data = [
        {
          imgSrc: "6aa6df45-3617-42dd-a025-b27126beb727.avif",
          name: "Chupa Chups Sour Belt Mixed Fruit Candy",
          weight: "57.6g",
          price: 30,
          originalPrice: null,
          deliveryTime: "9 MINS",
        },
        {
          imgSrc: "b35d3e0c-957e-4575-a85f-203591f91fe5.avif",
          name: "Chupa Chups Sour Bites Mixed Fruit Candy",
          weight: "261.6g",
          price: 35,
          originalPrice: null,
          deliveryTime: "9 MINS",
        },
        {
          imgSrc: "0cdb751e-a797-4f76-ba3d-00a4c6130c19.avif",
          name: "Happydent Wave Sugarfree Mint Chewing Gum 18 Pcs",
          weight: "28.9g",
          price: 50,
          originalPrice: null,
          deliveryTime: "9 MINS",
        },
        {
          imgSrc: "759d0d59-6626-456e-ba51-f8a16659b494.avif",
          name: "Happydent Sugar Free Wave Fruit Flavour Chewing Gum",
          weight: "28.9g",
          price: 50,
          originalPrice: null,
          deliveryTime: "9 MINS",
        },
        {
          imgSrc: "1a1859a6-dbfc-4756-ba03-1e87a4424911.avif",
          name: "Sour Punk Strawberry Flavour Stick Candy",
          weight: "40g",
          price: 35,
          originalPrice: null,
          deliveryTime: "9 MINS",
        },
        {
          imgSrc: "2928a5a6-adcb-4b33-ae17-d09a549e90ed.avif",
          name: "Impact Strike Watermelon Chewing Gum",
          weight: "29g",
          price: 80,
          originalPrice: 100,
          deliveryTime: "9 MINS",
        },
        ];
  return (
    <div>
      <Candies_Gums1 data={data}/>
    </div>
  )
}
