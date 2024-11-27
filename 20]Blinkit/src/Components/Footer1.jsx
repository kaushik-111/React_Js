// Footer1.js
import React from 'react';

export default function Footer1({ usefulLinks,usefulLinks1,usefulLinks2, categories, categories1,categories2 }) {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Useful Links</h3>
        <ul>
          {usefulLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='footer-section-1'>
      <ul>
          {usefulLinks1.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='footer-section-2'>
      <ul>
          {usefulLinks2.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-section-3">
        <h3>Categories</h3>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <a href={category.url}>{category.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className='footer-section-4'>
      <ul>
          {categories1.map((category, index) => (
            <li key={index}>
              <a href={category.url}>{category.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className='footer-section-5'>
      <ul>
          {categories2.map((category, index) => (
            <li key={index}>
              <a href={category.url}>{category.name}</a>
            </li>
          ))}
        </ul>
      </div>


      <div className="footer-bottom">
        <p>© Blink Commerce Private Limited, 2016-2024</p>
        <p>Blinkit is owned & managed by Blink Commerce Private Limited.</p>
      </div>
    </footer>
  );
}
