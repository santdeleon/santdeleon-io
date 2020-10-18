import React, { useState, useContext } from "react";
import cx from "classnames";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { string, array } from "prop-types";
import { ThemeContext } from "styled-components";

import Footer from "../../Footer";

import "./index.css";

const propTypes = {
  theme: string.isRequired,
  technologies: array.isRequired
};

const Tech = ({ theme, technologies }) => {
  const themeContext = useContext(ThemeContext);
  const [selectedTab, setSelectedTab] = useState("Frontend");

  return (
    <div
      id="Tech"
      className="Tech pt-5"
      style={{ backgroundColor: themeContext.backgroundColor }}
    >
      <Container>
        <Row>
          <Col>
            <h3 className="mb-0">Technologies and Skills</h3>
            <h5 className="font-weight-light text-muted">I've developed</h5>
          </Col>
        </Row>

        <Row className="justify-content-center my-5" noGutters>
          <Col
            xs={12}
            md={8}
            className="rounded tech-container p-1"
            style={{ height: "250px" }}
          >
            <div
              className="w-100 h-100 px-2"
              style={{ backgroundColor: themeContext.backgroundColor }}
            >
              {["Frontend", "Blockchain", "Backend"].map((stack, i) => (
                <Button key={i} variant="none" className="p-0 mt-2 mr-1">
                  <FontAwesomeIcon
                    key={i}
                    icon={faCircle}
                    className={cx({
                      "text-dark": stack === selectedTab,
                      "text-muted": stack !== selectedTab
                    })}
                    onClick={() => setSelectedTab(stack)}
                  />
                </Button>
              ))}
              {technologies.map(
                ({ id, name, languages }) =>
                  name === selectedTab && (
                    <Row key={id} className="justify-content-center" noGutters>
                      <Col
                        xs={12}
                        md={10}
                        className="my-2 pl-2 py-3 text-center"
                      >
                        <h3>{name} Stack</h3>
                        {languages.map((language, i) => (
                          <Badge
                            key={i}
                            pill
                            variant="light"
                            className="mr-1"
                            onMouseOver={e => {
                              e.target.className =
                                e.target.className + " bg-warning";
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            {language}
                          </Badge>
                        ))}
                      </Col>
                    </Row>
                  )
              )}
            </div>
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  );
};

Tech.propTypes = propTypes;
export default Tech;
