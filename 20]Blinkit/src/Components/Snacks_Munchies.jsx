import React from 'react'
import Snacks_Munchies1 from './Snacks_Munchies1';
export default function Snacks_Munchies() {
    const data = [
      {
        imgSrc: "de6faf0d-7cd2-4c79-b850-1ab4968df46c.avif",
        name: "Cheetos Cheez Puffs",
        weight: "28g",
        price: 10,
        originalPrice: null,
        deliveryTime: "9 MINS",
      },
      {
        imgSrc: "ef3c74a4-c809-4799-919d-27f75fba37eb.avif",
        name: "Cheetos Cheese Flavoured Puffs",
        weight: "24.8g",
        price: 161,
        originalPrice: null,
        deliveryTime: "9 MINS",
      },
      {
        imgSrc: "3281415d-c53c-456c-8618-649f8e931c42.avif",
        name: "Kettle Studio Wafers - Lime & Chilli",
        weight: "150g",
        price: 80,
        originalPrice: null,
        deliveryTime: "9 MINS",
      },
      {
        imgSrc: "033d8394-849a-4a07-a712-79a50df9bd51.avif",
        name: "Kettle Studio Potato Chips - Himalyan Pink Salt",
        weight: "113g",
        price: 99,
        originalPrice: null,
        deliveryTime: "9 MINS",
      },
      {
        imgSrc: "b798ce6c-b936-4fc3-a5a5-48d125fbe978.avif",
        name: "Kettle Studio Homestyle Potato Crisps - Lime & Chilli",
        weight: "113g",
        price: 10,
        originalPrice: null,
        deliveryTime: "9 MINS",
      },
      {
        imgSrc: "7dd25b43-94da-42ad-b719-35ad9e395705.avif",
        name: "Kettle Studio Himalayan Pink Salt Potato Chips",
        weight: "47g",
        price: 47,
        originalPrice: null,
        deliveryTime: "9 MINS",
      },
      ];
  return (
    <div>
       <Snacks_Munchies1 data={data}/>
    </div>
  )
}
