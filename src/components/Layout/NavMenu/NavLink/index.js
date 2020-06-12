import React from "react";
import { string, object } from "prop-types";

import "./index.css";

const propTypes = {
  icon: object.isRequired,
  name: string.isRequired,
  theme: string.isRequired,
  href: string.isRequired
};

const defaultProps = {
  icon: {},
  name: "",
  theme: "",
  href: ""
};

const NavLink = ({ icon, name, theme, href, toggleSidebar, isSidebarLink }) => (
  <a
    href={href}
    className="nav-link fromLeft align-items-center"
    style={theme === "light" ? { color: "#000" } : { color: "#fff" }}
    onClick={isSidebarLink && toggleSidebar}
  >
    <span className="mr-1">{icon}</span>
    {name}
  </a>
);

NavLink.propTypes = propTypes;
NavLink.defaultProps = defaultProps;
export default NavLink;
