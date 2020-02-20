import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav>
      <nav className='navbar bg-primary '>
        <h1>
          <i className={icon}></i> {title}
        </h1>
        <ul>
          <li>
            <Link to='/About'>About</Link>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
