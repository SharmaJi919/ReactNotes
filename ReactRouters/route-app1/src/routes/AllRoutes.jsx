import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Products from "../pages/Products";
import SingleProduct from "../pages/SingleProduct";
import PrivateRoute from "./PrivateRoute";




const AllRoutes = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<PrivateRoute><SingleProduct /></PrivateRoute>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
