import React from 'react';
import './Project.css'; // Make sure to import your CSS file

export default function Project() {
  // Define an array of card data (image and button texts)
  const cardData = [
    {
      imgSrc: 'https://via.placeholder.com/280x200',
      buttonText1: 'Button 1',
      buttonText2: 'Button 2',
    },
    {
      imgSrc: 'https://via.placeholder.com/280x200',
      buttonText1: 'Button 3',
      buttonText2: 'Button 4',
    },
    {
      imgSrc: 'https://via.placeholder.com/280x200',
      buttonText1: 'Button 5',
      buttonText2: 'Button 6',
    },
  ];

  return (
    <div className="container">
      {/* Dynamically render each card */}
      {cardData.map((card, index) => (
        <div className="box" key={index}>
          <div className="card-content">
            <img src={card.imgSrc} alt={`Card Image ${index + 1}`} className="card-image" />
            <div className="buttons">
              <button className="btn">{card.buttonText1}</button>
              <button className="btn">{card.buttonText2}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
