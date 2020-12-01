import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { ThemeContext } from "styled-components";
import cx from "classnames";

import "./index.css";

import { useBrand } from "../../../context/useBrand";
import { useTheme } from "../../../context/useTheme";

import SantLight from "../../../assets/img/sant-light.svg";
import SantDark from "../../../assets/img/sant-dark.svg";

const Header = () => {
  const { skills } = useBrand();
  const { theme } = useTheme();
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <Row as="header" id="Header" className="Header mt-md-5">
        <Col>
          <img
            src={theme === "light" ? SantLight : SantDark}
            alt={theme === "light" ? "Sant & Sun" : "Sant & Moon"}
            className="Header__Img--avatar"
          />
          <h1 className="display-4">
            <span
              className={cx({
                "rainbow-text": theme === "dark"
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
        </Col>
      </Row>
      <Row>
        {skills.map(({ id, color, name, Icon }) => (
          <Col key={id}>
            <div className="bg-transparent">
              <div
                className="Header--skill-header"
                style={{ backgroundColor: color }}
              />
              <div
                className="Header--skill-body text-center py-3"
                style={{ backgroundColor: themeContext.backgroundColor }}
              >
                <p className="p-0 m-0 d-none d-lg-block">{name}</p>
                <span className="d-block d-lg-none">{Icon}</span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Header;
