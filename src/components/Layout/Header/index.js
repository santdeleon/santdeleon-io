import React from "react";
import { string, object } from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowDownCircle } from "react-feather";

import "./index.css";

import SantLight from "../../../assets/img/sant-light.svg";
import SantDark from "../../../assets/img/sant-dark.svg";

const propTypes = {
  theme: string.isRequired,
  particles: object.isRequired,
  user: object.isRequired
};

const defaultProps = {
  theme: "light",
  particles: {},
  user: []
};

const Header = ({ theme, particles, user }) => {
  window.onload = () => {
    particles.init({
      selector: ".background",
      color: "#222"
    });
  };

  return (
    <header id="Header" className="Header">
      <Container>
        <Row className="my-4">
          <Col xs={12} md={6}>
            <div className="">
              {theme === "light" ? (
                <img
                  src={SantLight}
                  className="m-0 p-0"
                  alt="Lightmode Header Cartoon"
                />
              ) : (
                <img
                  src={SantDark}
                  className="m-0 p-0"
                  alt="Darkmode Header Cartoon"
                />
              )}
              <h2>
                Hello, I'm Sant. Blockchain engineer and front-end developer
              </h2>
              <h5 className="text-muted font-weight-light mt-4">
                with a knack for creating cutting edge products with elegance
                and style.
              </h5>
            </div>
          </Col>
        </Row>

        <Row className="mb-5 d-none d-md-flex">
          {user.skills.map(skill => {
            return (
              <Col key={skill.id}>
                <div
                  className="mt-5"
                  style={
                    theme === "light"
                      ? { backgroundColor: "#fff" }
                      : { backgroundColor: "#212121" }
                  }
                >
                  <div
                    className="skill-header"
                    style={{ backgroundColor: skill.color }}
                  ></div>
                  <div className="skill-body text-center py-3">
                    <p className="p-0 m-0">{skill.name}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>

        <Row className="scroll-btn-wrapper" noGutters>
          <Col>
            <a
              className={`d-flex justify-content-center ${
                theme === "light" ? "text-dark" : "text-light"
              }`}
              href="#Portfolio"
              style={{ textDecoration: "none" }}
            >
              <ArrowDownCircle className="arrow-down" />
            </a>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default Header;
