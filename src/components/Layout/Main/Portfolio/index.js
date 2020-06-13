import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { string, object } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProjectCard from "./ProjectCard";

import "./index.css";

const propTypes = {
  theme: string.isRequired,
  github: object.isRequired,
  user: object.isRequired
};

const defaultProps = {
  theme: "",
  github: {},
  user: {}
};

const Portfolio = ({ theme, github, user }) => {
  return (
    <Container id="Portfolio" className="Portfolio py-5" fluid>
      <Row className="mb-5">
        <Col className="text-center">
          <h4 className="font-weight-light text-muted">Meet some companies</h4>
          <h5>
            I've had the pleasure <br /> to work with
          </h5>
        </Col>
      </Row>

      <Row className="my-3">
        {Object.keys(user.projects).map((project, index) => (
          <Col xs={12} lg={6} key={user.projects[project].id}>
            <ProjectCard
              name={project}
              id={user.projects[project].id}
              className={user.projects[project].className}
              url={user.projects[project].url}
              img={user.projects[project].img}
              width={user.projects[project].width}
              height={50}
              text={user.projects[project].text}
              industry={user.projects[project].industry}
            />
          </Col>
        ))}
      </Row>

      <Row className="mt-5 mb-3 px-5">
        <Col className="text-center">
          <a
            href="https://github.com/santdeleon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark custom-button"
            aria-label="Github"
            title="Github"
            style={{ textDecoration: "none" }}
          >
            See more work <FontAwesomeIcon icon={github} />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

Portfolio.propTypes = propTypes;
Portfolio.defaultProps = defaultProps;
export default Portfolio;
