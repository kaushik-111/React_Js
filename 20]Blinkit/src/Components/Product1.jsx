import React, { useState, useEffect } from 'react';

export default function Product1(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(props.data); 
    }, 3000);  

    return () => clearTimeout(timer); 
  }, [props.data]);  

  return (
    <div className="container">
      {data ? (
        data.map((item, index) => (
            <div className="card1" key={index}>
              <img src={item.imgSrc} alt={`Product item ${index}`} />
            </div>
        ))
      ) : (
        <h4 className="loading">Loading...</h4>  
      )}
    </div>
  );
}
