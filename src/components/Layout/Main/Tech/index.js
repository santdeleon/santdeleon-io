import React from "react";
import { Row, Col } from "react-bootstrap";
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
    <div
      id="Tech"
      className="Tech px-5"
      style={
        theme === "light"
          ? { backgroundColor: "#f9f9f9" }
          : { backgroundColor: "#212121" }
      }
    >
      <Row className="py-5 text-center flex-column">
        <h5 className="text-muted">Some cool technologies</h5>
        <h3>That i'm pretty good with</h3>
      </Row>

      <Row className="flex-column flex-md-row justify-content-between pb-5">
        {Object.keys(technologies).map(obj => {
          return (
            <Col>
              <div
                key={technologies[obj].id}
                className={`${technologies[obj].name} flex-column rounded p-4 my-3`}
                style={
                  theme === "light"
                    ? { backgroundColor: "#fff" }
                    : { backgroundColor: "" }
                }
              >
                <h3 className="m-0" style={{ color: technologies[obj].color }}>
                  0{technologies[obj].id}
                </h3>
                <h3
                  className="mt-0 mb-3"
                  style={{
                    borderBottom: `3px solid ${technologies[obj].color}`
                  }}
                >
                  {technologies[obj].name}
                </h3>

                <Row className="flex flex-column">
                  <Col>
                    <h4 className="mb-1 fw-light">Technologies:</h4>
                    <ul className="flex flex-column font-light">
                      {technologies[obj].tech.map((tech, i) => {
                        return (
                          <li key={i} className="text-muted">
                            {tech}
                          </li>
                        );
                      })}
                    </ul>

                    <h4 className="mb-1 fw-light">Tools:</h4>
                    <ul className="flex flex-column font-light">
                      {technologies[obj].tools.map((tool, i) => {
                        return (
                          <li key={i} className="text-muted">
                            {tool}
                          </li>
                        );
                      })}
                    </ul>
                  </Col>
                </Row>

                {technologies[obj].additional && (
                  <Row>
                    <Col>
                      <h4 className="mb-1 fw-light">Additional:</h4>
                      <ul className="flex flex-column font-light">
                        {technologies[obj].additional.map((a, i) => {
                          return (
                            <li key={i} className="text-muted">
                              {a}
                            </li>
                          );
                        })}
                      </ul>
                    </Col>
                  </Row>
                )}
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

Tech.propTypes = propTypes;
Tech.defaultProps = defaultProps;
export default Tech;
