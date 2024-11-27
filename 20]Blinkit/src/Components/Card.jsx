import React from 'react';
import Card1 from './Card1';

export default function Card() {
  const data = [
    {
      imgSrc: "pharmacy-WEB.jpg",
    },
    {
      imgSrc: "Pet-Care_WEB.jpg", 
    },
    {
      imgSrc: "babycare-WEB.jpg", 
    },
  ];



  return (
    <div>
      <Card1 data={data} />
    </div>
  );
}
