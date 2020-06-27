import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <ul>
    <li>
      <NavLink exact to="/" activeClassName="active-link">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/movies" activeClassName="active-link">
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Header;
