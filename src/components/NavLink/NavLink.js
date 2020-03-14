import React from 'react';

import './NavLink.css';

function NavLink(props) {

  return (
    <li className="nav-link fromLeft">
      <a href={props.href} className="fw-light" aria-label={props.name}>{props.name}</a>
    </li>
  );
}

export default NavLink;
