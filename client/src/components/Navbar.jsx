import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/Navbar.css'; // Import your CSS file for Navbar styling

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src="https://t3.ftcdn.net/jpg/05/90/75/40/360_F_590754013_CoFRYEcAmLREfB3k8vjzuyStsDbMAnqC.jpg" alt="Logo" />
      </div>
      <div className="nav-links">
        <NavLink to='/home' exact>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/reviews'>Reviews</NavLink> 
      </div>
      <div className="login">
        <NavLink to='/'>Login</NavLink>
        <NavLink to='/'>Sign up</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
