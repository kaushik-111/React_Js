// Footer.js
import React from 'react';
import Footer1 from './Footer1';

export default function Footer() {
  const usefulLinks = [
    { name: 'About', url: '/about' },
    { name: 'Careers', url: '/careers' },
    { name: 'Blog', url: '/blog' },
    { name: 'Press', url: '/press' },
    { name: 'Lead', url: '/lead' },
    { name: 'Value', url: '/value' },
  ];
  const usefulLinks1 = [
    { name: 'About', url: '/about' },
    { name: 'Careers', url: '/careers' },
    { name: 'Blog', url: '/blog' },
    { name: 'Press', url: '/press' },
    { name: 'Lead', url: '/lead' },
    { name: 'Value', url: '/value' },
  ];

  const usefulLinks2 = [
    { name: 'Blog', url: '/blog' },
    { name: 'Press', url: '/press' },
    { name: 'Lead', url: '/lead' },
    { name: 'Lead', url: '/lead' },
    { name: 'Lead', url: '/lead' },
    { name: 'Lead', url: '/lead' },

  ];
  
  const categories = [
    { name: 'Vegetables & Fruits', url: '/categories/vegetables-fruits' },
    { name: 'Dairy & Breakfast', url: '/categories/dairy-breakfast' },
    { name: 'Bakery & Biscuits', url: '/categories/bakery-biscuits' },
    { name: 'Snacks & Munchies', url: '/categories/snacks-munchies' },
    { name: 'Beauty & Cosmetics', url: '/categories/beauty-cosmetics' },
    { name: 'Tea, Coffee & Drinks', url: '/categories/tea-coffee' },
  ];
  const categories1 = [
    { name: 'Vegetables & Fruits', url: '/categories/vegetables-fruits' },
    { name: 'Dairy & Breakfast', url: '/categories/dairy-breakfast' },
    { name: 'Bakery & Biscuits', url: '/categories/bakery-biscuits' },
    { name: 'Snacks & Munchies', url: '/categories/snacks-munchies' },
    { name: 'Beauty & Cosmetics', url: '/categories/beauty-cosmetics' },
    { name: 'Tea, Coffee & Drinks', url: '/categories/tea-coffee' },
  ];


  const categories2 = [
    { name: 'Vegetables & Fruits', url: '/categories/vegetables-fruits' },
    { name: 'Dairy & Breakfast', url: '/categories/dairy-breakfast' },
    { name: 'Bakery & Biscuits', url: '/categories/bakery-biscuits' },
    { name: 'Snacks & Munchies', url: '/categories/snacks-munchies' },
    { name: 'Beauty & Cosmetics', url: '/categories/beauty-cosmetics' },
    { name: 'Tea, Coffee & Drinks', url: '/categories/tea-coffee' },
  ];
  return (
    <div>
      <Footer1 usefulLinks={usefulLinks} usefulLinks1={usefulLinks1} usefulLinks2={usefulLinks2} categories={categories} categories1={categories1} categories2={categories2}/>
    </div>
  );
}
