import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSData } from "../api/api";


const SingleProduct = () => {
    const [data, setData] = useState({});
    
    
    const { id } = useParams();
    console.log(id)

  useEffect(() => {
    getSData(id, setData);
}, [id]);
// console.log(data)
const { image, title, price, category, description } = data;

//we need auth status
    
  return (
    <div>
      <img src={image} alt={title} width={200} height={200} />
      <h1>{title}</h1>
      <h2>Price : $ {price}</h2>
      <h3>Category : {category}</h3>
      {/* <h3>Rating : {rating.rate}</h3>
      <h4>{rating.count} items left in stock</h4> */}
      <h4>
        <strong>
          Product Description : <span>{description}</span>
        </strong>
      </h4>
    </div>
  );
};

export default SingleProduct;
