import React from 'react';
import Product1 from './Product1';  // Assuming Product1 is in a separate file

export default function Product() {
  // Image data
  const data = [
    { imgSrc: "paan-corner_web (1).avif" },
    { imgSrc: "Slice-2_10.avif" },
    { imgSrc: "Slice-3_9.avif" },
    { imgSrc: "Slice-4_9.avif" },
    { imgSrc: "Slice-5_4.avif" },
    { imgSrc: "Slice-6_5.avif" },
    { imgSrc: "Slice-7_3.avif" },
    { imgSrc: "Slice-2_10.avif" },
    { imgSrc: "Slice-8_4.avif" },
    { imgSrc: "Slice-9_3.avif" },
    { imgSrc: "Slice-10.avif" },
    { imgSrc: "Slice-11.avif" },
    { imgSrc: "Slice-12.avif" },
    { imgSrc: "Slice-13.avif" },
    { imgSrc: "Slice-14.avif" },
    { imgSrc: "Slice-15.avif" },
    { imgSrc: "Slice-16.avif" },
    { imgSrc: "Slice-17.avif" },
    { imgSrc: "Slice-18.avif" },
    { imgSrc: "Slice-19.avif" },
  ];

  return (
    <div>
      <Product1 data={data} />
    </div>
  );
}
