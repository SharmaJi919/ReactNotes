import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    const links = [
        {path: '/', component:'Home'},
        {path: '/products', component:'Product'},
        {path: '/addproduct', component:'AddProduct'}
    ]
  return (
      <div style={{display:'flex',justifyContent:'space-around'}}>
          {
              links.map(link => (<Link key={link.path} to={link.path}>{link.component}</Link>))
          }
    </div>
  )
}

export default Navbar