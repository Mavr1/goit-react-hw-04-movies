import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <nav>
      <ul className="navMenu">
        <li className="navMenu-item">
          <NavLink
            exact
            to="/"
            className="pageLink"
            activeClassName="active-pageLink"
          >
            Home
          </NavLink>
        </li>
        <li className="navMenu-item">
          <NavLink
            exact
            to="/movies"
            className="pageLink"
            activeClassName="active-pageLink"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
