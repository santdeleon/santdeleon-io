import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css';


function Navbar(props) {
  let url = window.location.href;
  let el;

  if (url.includes("/contact")) {
    el =  <div>
            <button className="btn contact-btn" onClick={props.clearForm}>
              <FontAwesomeIcon icon={props.refresh} />
            </button>

            <Link to="/">
              <button className="btn contact-btn btn2">
                <FontAwesomeIcon icon={props.home} />
              </button>
            </Link>
          </div>
  } else if (!url.includes("contact")){
    el =  <Link to="/contact">
            <button className="btn">
              Say Hello
            </button>
          </Link>
  }


  return (
    <nav className="nav navbar flex">
      <div className="navbar-brand flex">
        <a href="http://santdeleon.co">
          <img src={require('../../assets/img/logo.svg')} alt="logo"/>
        </a>
      </div>

      <div className="nav-btn-container flex">
        {el}
      </div>
    </nav>
  );
}

export default Navbar;
