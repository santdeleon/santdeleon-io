import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar(props) {
  return (
    <nav className="nav navbar flex">
      <div className="navbar-brand flex">
        <a href="http://santdeleon.co">
          <img src={require('../../assets/img/logo.svg')} alt="logo"/>
        </a>
      </div>

      <div className="nav-btn-container flex">
        <Link to="/contact">
          <button className="btn">Say Hello</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;