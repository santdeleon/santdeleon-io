import React from "react";
import cx from "classnames";
import { Row, Col } from "react-bootstrap";
import { string, array } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

const propTypes = {
  theme: string.isRequired,
  socialIcons: array.isRequired
};

const Footer = ({ theme, socialIcons }) => {
  return (
    <footer id="Footer" className="Footer">
      <Row className="px-3">
        <Col>
          {socialIcons.map(icon => (
            <a
              href={icon.url}
              key={icon.id}
              className={cx({
                "ml-3": icon.id !== 0
              })}
              target="_blank"
              rel="noopener noreferrer"
              title={icon.name}
              aria-label={icon.name}
            >
              <FontAwesomeIcon
                className={cx({
                  "text-dark": theme === "light",
                  "text-light": theme === "dark"
                })}
                icon={icon.icon}
              />
            </a>
          ))}
        </Col>
        <Col>
          <p className="m-0 text-right">
            Made with <FontAwesomeIcon className="text-danger" icon={faHeart} />{" "}
            by Sant
          </p>
        </Col>
      </Row>
    </footer>
  );
};

Footer.propTypes = propTypes;
export default Footer;
