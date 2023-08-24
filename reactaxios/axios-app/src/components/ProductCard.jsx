import React from 'react'

const ProductCard = ({id,title,price,description,category,image,rating}) => {
  return (
      <div>
          <img src={image} alt={title} width={200} height={200}/>
          <h3>{title}</h3>
          <h4>Price : $ {price}</h4>
          <h4>Category : {category}</h4>
    </div>
  )
}

export default ProductCard