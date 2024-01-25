import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/Navbar.css'; // Import your CSS file for Navbar styling

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="nav-links">
        <NavLink to='/' exact>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/reviews'>Reviews</NavLink> </div>
      <div className="search">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </nav>
  );
}

export default Navbar;
