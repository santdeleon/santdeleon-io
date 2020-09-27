import React from "react";
import cx from "classnames";
import { Row, Col } from "react-bootstrap";
import { string, object } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp, faHeart } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

const propTypes = {
  theme: string.isRequired,
  socialIcons: object.isRequired
};

const Footer = ({ theme, socialIcons }) => {
  return (
    <footer id="Footer" className="Footer pb-3">
      <Row>
        <Col className="text-right mr-3">
          <a
            href="#App"
            title="To the top of the page"
            aria-label="To the top of the page"
          >
            <FontAwesomeIcon
              className={cx({
                red: theme === "light",
                yellow: theme === "dark"
              })}
              icon={faArrowCircleUp}
              style={{ fontSize: "24px" }}
            />
          </a>
        </Col>
      </Row>

      <Row className="px-3">
        <Col xs={6} md={4}>
          {Object.keys(socialIcons).map(icon => (
            <a
              href={socialIcons[icon].url}
              key={socialIcons[icon].id}
              className={cx({
                "ml-3": socialIcons[icon].id !== 0
              })}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={cx({
                  "text-dark": theme === "light",
                  "text-light": theme === "dark"
                })}
                icon={socialIcons[icon].icon}
              />
            </a>
          ))}
        </Col>
        <Col md={4} className="text-center d-none d-md-block">
          <p className="m-0">
            <span role="img" aria-label="Copyright Emoji">
              ©️
            </span>{" "}
            Sant Deleon, 2020
          </p>
        </Col>
        <Col xs={6} md={4}>
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
