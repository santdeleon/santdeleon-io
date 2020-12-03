import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ProjectCard from "./ProjectCard";

import { useBrand } from "../../../../context/useBrand";

const Portfolio = () => {
  const { projects } = useBrand();

  return (
    <Container id="Portfolio" className="Portfolio py-5 my-5">
      <Row className="py-5 my-5">
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
