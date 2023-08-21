import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({ el , i}) => {
    const { id, image, title, price } = el;
  
    return (
      <div key={i} style={{ width: "75%", margin: "auto" }}>
        <Link to={`/products/${id}`}>
          <img src={image} alt={title} width={200} height={200} />
          <h3>{title}</h3>
          <h4>Price : $ {price} </h4>
        </Link>
      </div>
    );
  
}

export default ProductCard