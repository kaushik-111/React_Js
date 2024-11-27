import React from 'react';
import Dairy_Bread_Eggs1 from './Dairy_Bread_Eggs1';

export default function Dairy_Bread_Eggs() {
  const data = [
    {
      imgSrc: "1c0db977-31ab-4d8e-abf3-d42e4a4b4632.avif",
      name: "Amul Gold Full Cream Fresh Milk",
      weight: "500 ml",
      price: 33,
      originalPrice: null,
      deliveryTime: "19 MINS",
    },
    {
      imgSrc: "5ee4441d-9109-48fa-9343-f5ce82b905a6.avif",
      name: "Amul Taaza Toned Fresh Milk",
      weight: "500 ml",
      price: 27,
      originalPrice: null,
      deliveryTime: "19 MINS",
    },
    {
      imgSrc: "6ae62ec2-3b13-4fff-b052-2ff3d4ef2d16.avif",
      name: "Amul Masti Curd",
      weight: "400 g",
      price: 35,
      originalPrice: null,
      deliveryTime: "19 MINS",
    },
    {
      imgSrc: "73bcc2db-0799-4014-ab75-029bfcdb8375.avif",
      name: "Amul Masti Curd",
      weight: "200 g",
      price: 23,
      originalPrice: null,
      deliveryTime: "19 MINS",
    },
    {
      imgSrc: "0be0d49a-4dae-408a-8786-afae1dd05cb1.avif",
      name: "Amul Salted Butter",
      weight: "100 g",
      price: 60,
      originalPrice: null,
      deliveryTime: "19 MINS",
    },
    {
      imgSrc:"170a.avif",
      name: "Amul Cheese Cubes",
      weight: "200 g",
      price: 134,
      originalPrice: 135,
      deliveryTime: "19 MINS",
    },
  ];

  return (
    <div>
      <Dairy_Bread_Eggs1 data={data} />
    </div>
  );
}
