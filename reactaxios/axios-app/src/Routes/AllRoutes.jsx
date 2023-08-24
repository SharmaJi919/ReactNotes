import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import AddProduct from '../pages/AddProduct'


const AllRoutes = () => {
  return (
      <div>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/products' element={<Product/>}/>
              <Route path='/addproduct' element={<AddProduct/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes