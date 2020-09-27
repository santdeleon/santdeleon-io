import React from "react";
import { array, bool, string, object, func } from "prop-types";
import cx from "classnames";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavLink from "../NavMenu/NavLink";

import "./index.css";

const propTypes = {
  theme: string.isRequired,
  showSidebar: bool.isRequired,
  setShowSidebar: func.isRequired,
  socialIcons: object.isRequired,
  navData: array.isRequired
};

const defaultProps = {
  showSidebar: false
};

const Sidebar = ({
  theme,
  showSidebar,
  setShowSidebar,
  socialIcons,
  navData
}) => {
  return (
    <div
      className={cx(
        "Sidebar d-flex d-md-none flex-column align-items-center justify-content-center menu-wrap",
        { "menu-show": showSidebar }
      )}
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
                icon={link.Icon}
                theme={theme}
                setShowSidebar={setShowSidebar}
                isSidebarLink={true}
              />
            ))}
          </ul>
        </Col>
      </Row>

      <Row className="my-5">
        <Col>
          {["this is not a bug", "this is not a bug", "this is not a bug"].map(
            (str, i) => (
              <div key={i} className="rainbow-top" style={{ height: "5px" }}>
                {str}
              </div>
            )
          )}
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          {Object.keys(socialIcons).map(icon => (
            <a
              key={socialIcons[icon].id}
              href={socialIcons[icon].url}
              className={cx({ "ml-4": socialIcons[icon].id !== 0 })}
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
          ))}
        </Col>
      </Row>
    </div>
  );
};

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;
export default Sidebar;
