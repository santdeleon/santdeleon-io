import React from 'react';
import './Header.css';

import Navbar from '../Navbar/Navbar';


function Header(props) {
  return (
    <header id="header" className="header flex flex-column has-mobile-padding has-desktop-padding">
      <Navbar logo={props.logo}/>
    </header>
  );
}

export default Header;
