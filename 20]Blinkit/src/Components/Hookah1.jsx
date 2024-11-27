import React from 'react'
export default function Hookah1({data}) {
    return (
        <div>
    <h2 className='Title'>Hookah
    </h2>
    <div className="container">
      {data.map((product, index) => (
        <div className="product-card" key={index}>
          <img src={product.imgSrc} alt={product.name} className="product-image" />
          <p className="delivery-time">{product.deliveryTime}</p>
          <h4 className="product-name">{product.name}</h4>
          <p className="product-weight">{product.weight}</p>
          <div className="price-container">
            <span className="price">₹{product.price}</span>
            {product.originalPrice && (
              <span className="original-price">₹{product.originalPrice}</span>
            )}
                      <button className="add-btn">ADD</button>

          </div>
        </div>
      ))}
    </div>
        </div>
    )
}
