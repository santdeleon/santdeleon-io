import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ProjectCard from "./ProjectCard";

import { useBrand } from "../../../../context/useBrand";

const Portfolio = () => {
  const { projects } = useBrand();

  return (
    <Container id="Portfolio" className="Portfolio pb-5 mb-5">
      <Row className="pb-5">
        <Col className="text-center">
          <h4 className="display-4">Work</h4>
          <p className="lead text-muted">Because why not</p>
        </Col>
      </Row>
      <Row>
        {projects.map(
          ({ id, name, href, img, color, emoji, industry, role }) => (
            <ProjectCard
              key={id}
              id={id}
              name={name}
              href={href}
              img={img}
              color={color}
              emoji={emoji}
              industry={industry}
              role={role}
            />
          )
        )}
      </Row>
    </Container>
  );
};

export default Portfolio;
