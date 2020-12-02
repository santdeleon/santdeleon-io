import React from "react";
import { Row, Col } from "react-bootstrap";
import cx from "classnames";

import { useBrand } from "../../../../context/useBrand";
import { useTheme } from "../../../../context/useTheme";

import "./index.css";

const Languages = () => {
  const { technologies } = useBrand();
  const { theme } = useTheme();

  return (
    <div id="Languages" className="Languages pt-5 px-3 px-sm-5 border-top">
      <h5>Languages</h5>
      <Row>
        <Col xs={12} lg={8}>
          <Row>
            {technologies.map(({ id, name, languages }) => (
              <Col key={id} xs={12} sm={3}>
                <ul className="p-0">
                  <li
                    className={cx("Languages__Li font-weight-bold", {
                      "text-dark": theme === "light",
                      "text-light": theme === "dark"
                    })}
                  >
                    {id === 1 ? <span>&nbsp;</span> : name}
                  </li>
                  {languages.map((language, i) => (
                    <li key={i} className="Languages__Li mt-1">
                      {language}
                    </li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={12} lg={4} className="text-left text-sm-right">
          <p className="mb-0 font-weight-light">
            Give me a shout{" "}
            <a
              href="mailto:sant@santdeleon.io"
              className={cx(
                "Languages__A--contact font-weight-bold text-decoration-none",
                {
                  "App--rainbow-text": theme === "dark",
                  "Languages--border-bottom": theme === "light"
                }
              )}
              title="Contact Sant"
              aria-label="Contact Sant"
            >
              sant@santdeleon.io
            </a>
          </p>
          <p className="font-weight-light">
            Let's get{" "}
            <span
              className={cx("font-weight-bold", {
                "Languages--border-bottom text-dark": theme === "light",
                "text-light": theme === "dark"
              })}
            >
              coffee
            </span>{" "}
            <span role="img" aria-label="Coffee Emoji">
              ☕
            </span>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Languages;
