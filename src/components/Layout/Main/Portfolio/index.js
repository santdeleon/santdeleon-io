import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { string, object } from "prop-types";

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
    <Container id="Portfolio" className="Portfolio py-5">
      <Row>
        <Col>
          <h4 className="text-muted mb-0">Places and People</h4>
          <h3 className="font-weight-bold">I've worked with</h3>
        </Col>
      </Row>
      <Row className="my-5">
        {Object.keys(user.projects).map((project, index) => (
          <Col xs={12} md={6} lg={4} key={user.projects[project].id}>
            <ProjectCard
              name={project}
              id={user.projects[project].id}
              className={user.projects[project].className}
              url={user.projects[project].url}
              img={user.projects[project].img}
              width={user.projects[project].width}
              text={user.projects[project].text}
              industry={user.projects[project].industry}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

Portfolio.propTypes = propTypes;
Portfolio.defaultProps = defaultProps;
export default Portfolio;
