import React, { useContext } from "react";
import { string } from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { ThemeContext } from "styled-components";

import "./index.css";

import { useBrand } from "../../../context/useBrand";

import SantLight from "../../../assets/img/sant-light.svg";
import SantDark from "../../../assets/img/sant-dark.svg";

const propTypes = {
  theme: string.isRequired
};

const Header = ({ theme }) => {
  const { skills } = useBrand();
  const themeContext = useContext(ThemeContext);

  return (
    <header id="Header" className="Header my-5 pb-5">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div>
              <img
                src={theme === "light" ? SantLight : SantDark}
                alt={`${
                  theme === "light" ? "Sant with Sun" : "Sant with Moon"
                }`}
              />
              <h1>
                Hello, I'm Sant. <br />
                Front-end & Blockchain Developer
              </h1>
              <h5 className="text-muted font-weight-light mt-4 mb-5">
                with a knack for creating cutting edge products with elegance
                and style.{" "}
                <span role="img" aria-label="Sparkle Emoji">
                  ✨
                </span>
              </h5>
            </div>
          </Col>
        </Row>
        <Row>
          {skills.map(({ id, color, name, Icon }) => (
            <Col key={id}>
              <div className="bg-transparent">
                <div
                  className="skill-header"
                  style={{ backgroundColor: color }}
                />
                <div
                  className="skill-body text-center py-3"
                  style={{ backgroundColor: themeContext.backgroundColor }}
                >
                  <p className="p-0 m-0 d-none d-md-block">{name}</p>
                  <span className="d-block d-md-none">{Icon}</span>
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
