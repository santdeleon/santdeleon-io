import React from "react";
import { string, object } from "prop-types";
import cx from "classnames";
import { Container, Row, Col } from "react-bootstrap";

import "./index.css";

import SantLight from "../../../assets/img/sant-light.svg";
import SantDark from "../../../assets/img/sant-dark.svg";

const propTypes = {
  theme: string.isRequired,
  user: object.isRequired
};

const Header = ({ theme, user }) => {
  return (
    <header id="Header" className="Header">
      <Container>
        <Row className="my-4">
          <Col xs={12} md={6}>
            <div>
              <img
                src={theme === "light" ? SantLight : SantDark}
                className="m-0 p-0"
                alt={`${theme === "light" ? "Lightmode" : "Darkmode"} Avatar`}
              />
              <h1>
                Hello, I'm Sant. <br />
                Blockchain & Front-end Developer
              </h1>
              <h5 className="text-muted font-weight-light mt-4">
                with a knack for creating cutting edge products with elegance
                and style.{" "}
                <span role="img" aria-label="Sparkle Emoji">
                  ✨
                </span>
              </h5>
            </div>
          </Col>
        </Row>

        <Row className="mb-5 d-none d-md-flex">
          {user.skills.map(skill => (
            <Col key={skill.id}>
              <div className="mt-5 bg-transparent">
                <div
                  className="skill-header"
                  style={{ backgroundColor: skill.color }}
                />
                <div className="skill-body text-center py-3">
                  <p className="p-0 m-0">{skill.name}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </header>
  );
};

Header.propTypes = propTypes;
export default Header;
