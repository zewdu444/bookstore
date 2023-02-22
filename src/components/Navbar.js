import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <h1><NavLink to="/">BookStore CMS</NavLink></h1>
      <ul id="nav-mobile" className="right">
        <li><NavLink to="/">BOOKS</NavLink></li>
        <li><NavLink to="/catagories">CATEGORIES</NavLink></li>
      </ul>

    </div>
  );
}

export default Navbar;
