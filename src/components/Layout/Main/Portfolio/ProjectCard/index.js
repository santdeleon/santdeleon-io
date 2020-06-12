import React from "react";
import { Row, Col } from "react-bootstrap";
import { number, string } from "prop-types";

const propTypes = {
  id: string.isRequired,
  url: string.isRequired,
  className: string.isRequired,
  name: string.isRequired,
  img: string.isRequired,
  width: number.isRequired,
  height: number.isRequired,
  text: string.isRequired,
  industry: string.isRequired
};

const defaultProps = {
  id: "",
  url: "",
  className: "",
  name: "",
  img: "",
  width: 0,
  height: 50,
  text: "",
  industry: ""
};

const ProjectCard = ({
  name,
  id,
  className,
  url,
  img,
  width,
  height,
  text,
  industry
}) => {
  return (
    <a
      id={id}
      className={`${className} project d-flex flex-column align-items-start my-3 px-4 py-5 rounded`}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={name}
      aria-label={name}
    >
      <Row>
        <Col>
          <img src={img} width={width} height={height} alt={name} />
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <p
            className="font-weight-bold m-0"
            dangerouslySetInnerHTML={{ __html: text }}
          ></p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="mb-0 font-weight-bold">Industry</p>
          <p className="m-0 font-weight-lighter">{industry}</p>
        </Col>
      </Row>
    </a>
  );
};

ProjectCard.propTypes = propTypes;
ProjectCard.defaultProps = defaultProps;
export default ProjectCard;
