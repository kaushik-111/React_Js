import React from 'react'
import Mouth_fresheners1 from './Mouth_fresheners1';

export default function Mouth_Fresheners() {
    const data = [
        {
          imgSrc: "9ed549e7-ba15-43a2-b703-77ea993076e7.avif",
          name: "Chandan Rajwadi Mouth Freshener",
          weight: "140g",
          price: 139,
          originalPrice: null,
          deliveryTime: "9 MINS",
        },
        {
          imgSrc: "655a442d-3a65-4dcd-9998-57868f0aea0d.avif",
          name: "Chandan Special Masala Mouth Freshener",
          weight: "100g",
          price: 60,
          originalPrice: null,
          deliveryTime: "9 MINS",
        },
        {
          imgSrc: "495586a.avif",
          name: "Amul Masti CurdCenter Fresh Sugar Free Mint Candy",
          weight: "35g",
          price: 100,
          originalPrice: null,
          deliveryTime: "9 MINS",
        },
        {
          imgSrc: "ddaa1d84-f4ba-41cb-9bf1-e1f840050c81.avif",
          name: "Chandan Jeera Goli Digestive Tablets",
          weight: "100g",
          price: 50,
          originalPrice: null,
          deliveryTime: "9 MINS",
        },
        {
          imgSrc: "478959a.avif",
          name: "Praakritik Natural Paan Gulkand",
          weight: "250g",
          price: 335,
          originalPrice: null,
          deliveryTime: "9 MINS",
        },
        {
          imgSrc:"a35c4402-2583-4f95-8c0f-8364b83974b0.avif",
          name: "Chandan Mitha Amla Candy",
          weight: "100g",
          price: 60,
          originalPrice: 135,
          deliveryTime: "19 MINS",
        },
      ];
    
      return (
        <div>
          <Mouth_fresheners1 data={data} />
        </div>
      );
}
