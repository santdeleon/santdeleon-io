import React from "react";
import { Row, Col } from "react-bootstrap";
import { number, string, object } from "prop-types";

import "./index.css";

const propTypes = {
  id: string.isRequired,
  url: string.isRequired,
  className: string.isRequired,
  name: string.isRequired,
  img: string.isRequired,
  width: number.isRequired,
  text: object.isRequired,
  industry: string.isRequired
};

const ProjectCard = ({
  name,
  id,
  className,
  url,
  img,
  width,
  text,
  industry
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    id={id}
    className={`${className} Main__ProjectCard Main__ProjectCard--${name} d-flex flex-column align-items-start my-3 px-4 py-3 rounded text-left text-decoration-none text-white`}
    title={name}
    aria-label={name}
  >
    <Row>
      <Col>
        <img src={img} width={width} alt={name} />
      </Col>
    </Row>
    <Row className="my-4">
      <Col>{text}</Col>
    </Row>
    <Row>
      <Col>
        <p className="mb-0 font-weight-bold">Industry</p>
        <p className="m-0 font-weight-lighter">{industry}</p>
      </Col>
    </Row>
  </a>
);

ProjectCard.propTypes = propTypes;
export default ProjectCard;
