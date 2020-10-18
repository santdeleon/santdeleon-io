import React from "react";
import { Button } from "react-bootstrap";
import { string, object } from "prop-types";

import "./index.css";

const propTypes = {
  icon: object.isRequired,
  name: string.isRequired,
  theme: string.isRequired,
  href: string.isRequired,
  color: string.isRequired
};

const NavLink = ({ icon, name, theme, href, color }) => (
  <li>
    <Button
      variant="link"
      href={href}
      className="custom-nav-link text-decoration-none align-items-center"
      style={{ color: color }}
    >
      <span className="mr-1">{icon}</span>
      {name}
    </Button>
  </li>
);

NavLink.propTypes = propTypes;
export default NavLink;
