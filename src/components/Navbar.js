import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <ul id="nav-mobile" className="right">
        <li><NavLink to="/">Books</NavLink></li>
        <li><NavLink to="/catagories">Categories</NavLink></li>
      </ul>

    </div>
  );
}

export default Navbar;
