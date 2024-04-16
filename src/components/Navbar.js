// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul style={{color: 'white'}} className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AboutMe">
                About me
              </Link>
            </li>
            <li style={{display: 'flex', justifyContent: 'flex-end'}} className="nav-item">
              <Link  className="nav-link" to="/bugFixes">
                Bug Fixes
              </Link>
            </li>
            <li>
            </li>
          </ul><Link className="navbar-brand" to="/">
          

        </Link>
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;