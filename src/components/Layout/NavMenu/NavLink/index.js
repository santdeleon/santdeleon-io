import React from "react";
import { string, object, func, bool } from "prop-types";

import "./index.css";

const propTypes = {
  icon: object.isRequired,
  name: string.isRequired,
  theme: string.isRequired,
  href: string.isRequired,
  setShowSidebar: func,
  isSidebarLink: bool.isRequired
};

const defaultProps = {
  isSidebarLink: false
};

const NavLink = ({
  icon,
  name,
  theme,
  href,
  setShowSidebar,
  isSidebarLink
}) => (
  <li>
    <a
      href={href}
      className="nav-link fromLeft align-items-center"
      style={theme === "light" ? { color: "#000" } : { color: "#fff" }}
      onClick={() => setShowSidebar(false)}
    >
      <span className="mr-1">{icon}</span>
      {name}
    </a>
  </li>
);

NavLink.propTypes = propTypes;
NavLink.defaultProps = defaultProps;
export default NavLink;
