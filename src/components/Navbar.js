import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ categories = [] }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/profile">Profile</Link></li>

        <li className="navbar-item dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <Link to="#" className="dropdown-toggle">Categories</Link>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              {categories.map((category, index) => (
                <li key={index} className="dropdown-item">
                  <Link to={`/categories/${category.toLowerCase().replace(/ /g, '-')}`}>{category}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li className="navbar-item"><Link to="/help">Help</Link></li>
        <li className="navbar-item"><Link to="/chat">Chat</Link></li>
        <li className="navbar-item"><Link to="/login">Login</Link></li> {/* Add login link */}
      </ul>
    </nav>
  );
};

export default Navbar;
