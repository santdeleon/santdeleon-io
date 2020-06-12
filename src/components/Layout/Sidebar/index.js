import React from "react";
import { array, bool, string, object, func } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavLink from "../NavMenu/NavLink";

import "./index.css";

const propTypes = {
  theme: string.isRequired,
  showSidebar: bool.isRequired,
  toggleSidebar: func.isRequired,
  socialIcons: object.isRequired,
  navData: array.isRequired
};

const defaultProps = {
  theme: "",
  showSidebar: false,
  toggleSidebar: () => {},
  socialIcons: {},
  navData: []
};

const Sidebar = ({
  theme,
  showSidebar,
  toggleSidebar,
  socialIcons,
  navData
}) => {
  return (
    <div
      className={`d-flex d-md-none flex-column align-items-center justify-content-around menu-wrap ${showSidebar &&
        "menu-show"}`}
      style={
        theme === "light"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#212121" }
      }
    >
      <div className="sidebar-links d-flex flex-column">
        <ul className="sidebar-menu d-flex flex-column mb-0 p-0">
          {navData.map(link => (
            <NavLink
              key={link.id}
              name={link.name}
              href={link.href}
              icon={link.icon}
              theme={theme}
              toggleSidebar={toggleSidebar}
              isSidebarLink={true}
            />
          ))}
        </ul>
      </div>

      <div className="hyphens"></div>

      <div className="d-flex align-items-center justify-content-center mb-5">
        {Object.keys(socialIcons).map(icon => {
          return (
            <a
              key={socialIcons[icon].id}
              href={socialIcons[icon].url}
              className={`${socialIcons[icon].id !== 0 && "ml-4"}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                href={socialIcons[icon].url}
                key={socialIcons[icon].id}
                target="_blank"
                rel="noopener noreferrer"
                className={`${theme === "light" ? "text-dark" : "text-light"}`}
                icon={socialIcons[icon].icon}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;
export default Sidebar;
