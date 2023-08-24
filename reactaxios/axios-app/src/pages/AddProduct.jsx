import React, { useState } from "react";
import axios from "axios";
const initstate = {
  image: "",
  title: "",
  price: "",
  category: "",
};

const AddProduct = ({getProduct,setData}) => {
  const [formdata, setFormdata] = useState(initstate);
  // const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit");
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
    //post request
    axios
      .post(`http://localhost:8080/products`, formdata )
      .then((response) => {
        console.log(response);
        getProduct(setData);
      })
      .catch((err) => console.log(err));
    // postData(formdata);
  };

  // console.log(formdata);
  return (
    <div>
      <h1>AddProduct</h1>

      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            width: "40%",
            margin: "auto",
            justifyContent: "space-between",
          }}
        >
          <label htmlFor="">
            Image :
          </label>
            <input
              type="text"
              placeholder="Image Link"
              name="image"
              value={formdata.image}
              onChange={(e) => setFormdata({...formdata,[e.target.name]: e.target.value})}
            />
        </div>

        <div
          style={{
            display: "flex",
            width: "40%",
            margin: "auto",
            justifyContent: "space-between",
          }}
        >
          <label htmlFor="">
            Title :
          </label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={formdata.title}
              onChange={(e) => setFormdata({...formdata,[e.target.name]: e.target.value})}
            />
        </div>

        <div
          style={{
            display: "flex",
            width: "40%",
            margin: "auto",
            justifyContent: "space-between",
          }}
        >
          <label htmlFor="">
            Price :
          </label>
            <input
              type="text"
              placeholder="Price"
              name="price"
              value={formdata.price}
              onChange={(e) => setFormdata({...formdata,[e.target.name]: e.target.value})}
            />
        </div>
        <div
          style={{
            display: "flex",
            width: "40%",
            margin: "auto",
            justifyContent: "space-between",
          }}
        >
          <label htmlFor="">
            Category :
          </label>
            <input
              type="text"
              placeholder="Category"
              name="category"
              value={formdata.category}
              onChange={(e) => setFormdata({...formdata,[e.target.name]: e.target.value})}
            />
        </div>
          <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;
