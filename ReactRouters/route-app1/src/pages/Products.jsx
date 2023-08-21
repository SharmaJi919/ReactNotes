import React, { useEffect, useState } from "react";
import { getData } from "../api/api.js";
import ProductCard from "../Components/productCard.jsx";

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(setData);
  }, []);

  console.log(data);

  return (
    <div>
      <h1>Products Page</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)",gap:'30px' }}>
        {data.map((el, i) => <ProductCard key={i} el={el} />)}
      </div>
    </div>
  );
}
