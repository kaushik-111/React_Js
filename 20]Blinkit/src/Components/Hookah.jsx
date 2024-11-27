import React from 'react'
import Hookah1 from "./Hookah1"
export default function Hookah() {
    const data = [
        {
          imgSrc: "480928a.avif",
          name: "Chief Commissioner Herbal Hookah Flavor (Tobacco Free) by Soex",
          weight: "50g",
          price: 100,
          originalPrice: null,
          deliveryTime: "9 MINS",
        },
        {
          imgSrc: "480927a.avif",
          name: "Brain Freeze Up Herbal Hookah Flavor (Tobacco Free) by Soex",
          weight: "50g",
          price: 100,
          originalPrice: null,
          deliveryTime: "9 MINS",
        },
        {
          imgSrc: "480929a.avif",
          name: "Watermelon Herbal Hookah Flavor (Tobacco Free) by Soex",
          weight: "50g",
          price: 100,
          originalPrice: null,
          deliveryTime: "9 MINS",
        },
        {
          imgSrc: "480930a.avif",
          name: "Bombay Paan Masala Herbal Hookah Flavor (Tobacco Free) by Soex",
          weight: "50g",
          price: 100,
          originalPrice: null,
          deliveryTime: "9 MINS",
        },
        {
          imgSrc: "480932a.avif",
          name: "Natural Spring Water Herbal Hookah Flavor (Tobacco Free) by Soex",
          weight: "50g",
          price: 100,
          originalPrice: null,
          deliveryTime: "9 MINS",
        },
        {
          imgSrc: "540986a.avif",
          name: "Premium Silver Hookah Foil by Rhythm Imports",
          weight: "30g",
          price: 100,
          originalPrice: null,
          deliveryTime: "9 MINS",
        },
        ];
    return (
      <div>
         <Hookah1 data={data}/>
      </div>
  )
}
