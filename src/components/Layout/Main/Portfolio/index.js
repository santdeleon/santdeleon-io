import React from "react";
import { Row, Col } from "react-bootstrap";

import ProjectCard from "./ProjectCard";

import { useBrand } from "../../../../context/useBrand";

import "./index.css";

const Portfolio = () => {
  const { projects } = useBrand();

  return (
    <div id="Portfolio" className="Portfolio my-5 py-5">
      <Row>
        <Col>
          <h3 className="mb-0">Places and People</h3>
          <h5 className="font-weight-light text-muted">I've worked with</h5>
        </Col>
      </Row>
      <Row>
        {projects.map(
          ({ name, id, className, url, img, width, text, industry }) => (
            <Col xs={12} md={6} lg={4} key={id}>
              <ProjectCard
                id={id}
                name={name}
                className={className}
                url={url}
                img={img}
                width={width}
                text={text}
                industry={industry}
              />
            </Col>
          )
        )}
      </Row>
    </div>
  );
};

export default Portfolio;
