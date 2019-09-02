import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
const NavBar = () => {
  return (
    <ul style={{ listStyle: 'none', textAlign: 'left' }}>
      <h2>NavBar</h2>
      <li>
        <NavLink exact={true} to="/" activeClassName="activeLink">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact={true} to="/products" activeClassName="activeLink">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink exact={true} to="/posts/2018/06" activeClassName="activeLink">
          Posts
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
