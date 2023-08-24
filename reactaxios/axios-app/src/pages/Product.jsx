import React, { useEffect, useState } from "react";
import { getProduct } from "../api/api";
import ProductCard from "../components/ProductCard";
import AddProduct from "./AddProduct";

function Product() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProduct(setData);
    return () => {
      console.log("clean up called");
    };
  }, []);
  console.log(data);

  return (
      <div>
          <h1>Add Product</h1>
          <AddProduct getProduct={getProduct} setData={setData} />
      <h1>Product</h1>
      <div>
        {data &&
          data.map((product) => <ProductCard key={product.id} {...product} />)}
      </div>
    </div>
  );
}

export default Product;
