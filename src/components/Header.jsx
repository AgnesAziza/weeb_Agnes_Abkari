import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div>
        <div>Weeb</div>
        <nav>
          <NavLink to="/" end>Home</NavLink> |{' '}
          <NavLink to="/contact">Contact</NavLink> |{' '}
          <NavLink to="/login">Login</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
