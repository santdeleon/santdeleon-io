import React from "react";
import { string, object } from "prop-types";

import "./index.css";

const propTypes = {
  icon: object.isRequired,
  name: string.isRequired,
  theme: string.isRequired,
  href: string.isRequired
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
export default NavLink;
