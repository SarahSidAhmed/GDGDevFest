'use client';
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">LOGO</div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <div className="nav-link">About us</div>
          </li>
          <li className="nav-item">
            <div className="nav-link">Features</div>
          </li>
          <li className="nav-item">
            <div className="nav-link">Testimonials</div>
          </li>
          <li className="nav-item">
            <div className="nav-link">Q&A</div>
          </li>
          <li className="nav-item">
            <button className="nav-link" id="Signin">Sign in</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" id="Signup">Sign up</button>
          </li>
        </ul>
        <div className="nav-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
