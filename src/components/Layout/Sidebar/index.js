import React from "react";
import { Row, Col } from "react-bootstrap";
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
      className={`Sidebar d-flex d-md-none flex-column align-items-center justify-content-center menu-wrap ${showSidebar &&
        "menu-show"}`}
      style={
        theme === "light"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#212121" }
      }
    >
      <Row className="flex-column">
        <Col>
          <ul className="flex-column p-0">
            {navData.map(link => (
              <NavLink
                key={link.id}
                name={link.name}
                href={link.href}
                icon={link.icon}
                theme={theme}
                toggleSidebar={toggleSidebar}
                isSidebarLink={true}
                className="mt-4"
              />
            ))}
          </ul>
        </Col>
      </Row>

      <Row className="my-5">
        <Col>
          <div className="rainbow-top" style={{ height: "5px" }}>
            this is not a bug
          </div>
          <div className="rainbow-top" style={{ height: "5px" }}>
            this is not a bug
          </div>
          <div className="rainbow-top" style={{ height: "5px" }}>
            this is not a bug
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
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
                  className={`${
                    theme === "light" ? "text-dark" : "text-light"
                  }`}
                  icon={socialIcons[icon].icon}
                />
              </a>
            );
          })}
        </Col>
      </Row>
    </div>
  );
};

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;
export default Sidebar;
