import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import cx from "classnames";
import { ThemeContext } from "styled-components";

import "./index.css";

import { useBrand } from "../../../context/useBrand";
import { useTheme } from "../../../context/useTheme";

import SantLight from "../../../assets/img/sant-light.svg";
import SantDark from "../../../assets/img/sant-dark.svg";

const Header = () => {
  const { skills } = useBrand();
  const { theme } = useTheme();
  const { backgroundColor } = useContext(ThemeContext);

  return (
    <Container
      as="header"
      id="Header"
      className="Header mt-5 flex-column h-100"
    >
      <Row>
        <Col>
          <img
            src={theme === "light" ? SantLight : SantDark}
            alt={theme === "light" ? "Sant & Sun" : "Sant & Moon"}
            className="Header__Img--avatar"
          />
          <h1 className="display-4">
            <span
              className={cx({
                "App--rainbow-text": theme === "dark"
              })}
            >
              Hello,{" "}
            </span>
            I'm Sant. <br />
            <span className="d-none d-md-block">
              Front-end & Blockchain Developer
            </span>
          </h1>
          <h4 className="d-none d-md-block text-muted font-weight-light mt-3 mb-5">
            with a knack for creating cutting edge products with elegance and
            style.{" "}
            <span role="img" aria-label="Sparkle Emoji">
              ✨
            </span>
          </h4>
          <h4 className="d-block d-md-none text-muted font-weight-light mb-4">
            front-end developer and blockchain engineer{" "}
          </h4>
          <Row>
            {skills.map(({ id, color, name, Icon }) => (
              <Col key={id}>
                <div className="bg-transparent">
                  <div
                    className="Header__Div--skill-header"
                    style={{ backgroundColor: color }}
                  />
                  <div
                    className="Header__Div--skill-body text-center py-3"
                    style={{ backgroundColor: backgroundColor }}
                  >
                    <p className="p-0 m-0 d-none d-lg-block">{name}</p>
                    <span className="d-block d-lg-none">{Icon}</span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
