import React, { useState, useEffect } from 'react';
import '../index.css';

export default function Card1(props) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setData(props.data);
    }, 3000);

    return () => clearTimeout(timer);
  }, [props.data ]);

  return (
    <>
      <div className="container">
        {data && (
          data.map((item, index) => (
            <div key={index} className="card">
              <img src={item.imgSrc} alt={`Data item ${index}`} />
            </div>
          ))
        ) }

      </div>
    </>
  );
}
