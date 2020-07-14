import React from 'react';
import { NavLink } from 'react-router-dom';

export function NavBar() {
  return (
    <div className="nav-parent">
      <NavLink exact to="/cart">
        <i className="fa fa-shopping-cart"></i>
        Cart
      </NavLink>
    </div>
  )
}