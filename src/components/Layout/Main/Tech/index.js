import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { string, object } from "prop-types";

import "./index.css";

const propTypes = {
  theme: string.isRequired,
  user: object.isRequired
};

const defaultProps = {
  theme: "light",
  object: {}
};

const Tech = ({ theme, user }) => {
  return (
    <Container
      fluid
      id="Tech"
      className="Tech"
      style={
        theme === "light"
          ? { backgroundColor: "#f9f9f9" }
          : { backgroundColor: "#212121" }
      }
    >
      <Row className="py-5">
        <Col className="text-center">
          <h4 className="font-weight-light text-muted">
            Check out some user.technologies
          </h4>
          <h5>That I'm pretty good with</h5>
        </Col>
      </Row>

      <Row className="tech-cards flex-column flex-md-row justify-content-between pb-5">
        {Object.keys(user.technologies).map(obj => (
          <Col xs={12} lg={4} key={user.technologies[obj].id}>
            <div
              className={`${user.technologies[obj].name} rounded p-4 my-3`}
              style={
                theme === "light"
                  ? { backgroundColor: "#fff" }
                  : { backgroundColor: "" }
              }
            >
              <h3 style={{ color: user.technologies[obj].color }}>
                0{user.technologies[obj].id}
              </h3>
              <h3
                className="mb-5"
                style={{
                  borderBottom: `3px solid ${user.technologies[obj].color}`
                }}
              >
                {user.technologies[obj].name}
              </h3>

              <Row className="flex-column">
                <Col>
                  <h4>Technologies:</h4>
                  <ul>
                    {user.technologies[obj].tech.map((tech, i) => (
                      <li key={i} className="text-muted">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <h4>Tools:</h4>
                  <ul>
                    {user.technologies[obj].tools.map((tool, i) => (
                      <li key={i} className="text-muted">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>

              {user.technologies[obj].additional && (
                <Row>
                  <Col>
                    <h4 className="mb-1 fw-light">Additional:</h4>
                    <ul className="flex flex-column font-light">
                      {user.technologies[obj].additional.map((a, i) => (
                        <li key={i} className="text-muted">
                          {a}
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              )}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

Tech.propTypes = propTypes;
Tech.defaultProps = defaultProps;
export default Tech;
