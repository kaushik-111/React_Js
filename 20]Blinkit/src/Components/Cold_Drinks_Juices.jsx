import React from 'react'
import Cold_Drinks_Juices1 from './Cold_Drinks_Juices1';

export default function Cold_Drinks_Juices() {
    const data = [
        {
          imgSrc: "e69c587d-802a-40eb-a40b-a6bc9623526d.avif",
          name: "Thums Up Soft Drink (750 ml)",
          weight: "750ml",
          price: 45,
          originalPrice: null,
          deliveryTime: "9 MINS",
        },
        {
          imgSrc: "122997a.avif",
          name: "Kinley Soda Water With Extra Punch",
          weight: "750ml",
          price: 20,
          originalPrice: null,
          deliveryTime: "9 MINS",
        },
        {
          imgSrc: "fec89b7b-8a13-477e-b750-7a52e82828a0.avif",
          name: "Coca-Cola Soft Drink (750 ml) - Pack of 2",
          weight: "750 ml",
          price: 45,
          originalPrice: null,
          deliveryTime: "9 MINS",
        },
        {
          imgSrc: "175086a.avif",
          name: "Amul Masti Spiced Salted Buttermilk",
          weight: "200 ml",
          price: 70,
          originalPrice: null,
          deliveryTime: "9 MINS",
        },
        {
          imgSrc: "534484a.avif",
          name: "Sparkling Ice Cubes by Burrf",
          weight: "1kg",
          price: 60,
          originalPrice: null,
          deliveryTime: "9 MINS",
        },
        {
          imgSrc:"0f87f19e-66da-48cd-8c75-343abf732948.avif",
          name: "Sprite Lime Flavored Soft Drink 750 ml",
          weight: "750 ml",
          price: 45,
          originalPrice: 135,
          deliveryTime: "9 MINS",
        },
      ];
    
      return (
        <div>
          <Cold_Drinks_Juices1 data={data} />
        </div>
      );
}
