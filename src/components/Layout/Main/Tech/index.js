import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { string } from "prop-types";

import "./index.css";

const propTypes = {
  theme: string.isRequired
};

const defaultProps = {
  theme: "light"
};

const technologies = {
  blockchain: {
    id: 1,
    name: "Blockchain Stack",
    color: "#f76f6e",
    tech: [
      "Solidity",
      "Web3",
      "React",
      "JavaScript",
      "HTML/CSS",
      "Chai",
      "Mocha"
    ],
    tools: [
      "Remix IDE",
      "OpenZepplin",
      "Provable",
      "Truffle Suite",
      "Ethereum mainnet and testnets"
    ]
  },
  frontend: {
    id: 2,
    name: "Front-End Stack",
    color: "#fbc07a",
    tech: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "Redux",
      "GatsbyJS",
      "NodeJS",
      "jQuery",
      "KnockoutJS",
      "Jest",
      "Mocha",
      "Chai",
      "SCSS",
      "PugJS",
      "Template Toolkit",
      "Bootstrap",
      "Bulma",
      "Materialize",
      "Storybook"
    ],
    tools: ["Atom Editor", "iTerm", "Yarn", "NPM"],
    additional: [
      "Jira",
      "Slack",
      "Confluence",
      "Stash/Bitbucket",
      "Google Hangouts",
      "Zoom",
      "Trello",
      "Telegram"
    ]
  },
  backend: {
    id: 3,
    name: "Backend Stack",
    color: "#ffdc74",
    tech: ["Java", "Perl", "VIM", "MongoDB", "Express"],
    tools: ["IntelliJ", "Spring Boot", "CPAN"]
  }
};

const Tech = ({ theme }) => {
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
            Check out some technologies
          </h4>
          <h5>That I'm pretty good with</h5>
        </Col>
      </Row>

      <Row className="tech-cards flex-column flex-md-row justify-content-between pb-5">
        {Object.keys(technologies).map(obj => (
          <Col xs={12} lg={4} key={technologies[obj].id}>
            <div
              className={`${technologies[obj].name} rounded p-4 my-3`}
              style={
                theme === "light"
                  ? { backgroundColor: "#fff" }
                  : { backgroundColor: "" }
              }
            >
              <h3 style={{ color: technologies[obj].color }}>
                0{technologies[obj].id}
              </h3>
              <h3
                className="mb-5"
                style={{
                  borderBottom: `3px solid ${technologies[obj].color}`
                }}
              >
                {technologies[obj].name}
              </h3>

              <Row className="flex-column">
                <Col>
                  <h4>Technologies:</h4>
                  <ul>
                    {technologies[obj].tech.map((tech, i) => (
                      <li key={i} className="text-muted">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <h4>Tools:</h4>
                  <ul>
                    {technologies[obj].tools.map((tool, i) => (
                      <li key={i} className="text-muted">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>

              {technologies[obj].additional && (
                <Row>
                  <Col>
                    <h4 className="mb-1 fw-light">Additional:</h4>
                    <ul className="flex flex-column font-light">
                      {technologies[obj].additional.map((a, i) => (
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
