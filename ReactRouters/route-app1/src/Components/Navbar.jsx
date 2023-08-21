import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const links = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/products",
      title: "Products",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/contact",
      title: "Contact",
    },
    {
      path: "/login",
      title: "Login",
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "space-around", margin: '20px', backgroundColor: 'yellow', padding:"20px" }}>
      {links.map((link) => (
        <Link to={link.path} style={{ textDecoration: "none", color: "black" }}>
          <u>
            <strong>{link.title}</strong>
          </u>
        </Link>
      ))}
    </div>
  );
}

export default Navbar;
