import React from "react";
import cx from "classnames";
import { Row, Col } from "react-bootstrap";
import { number, string, object } from "prop-types";

const propTypes = {
  id: string.isRequired,
  url: string.isRequired,
  className: string.isRequired,
  name: string.isRequired,
  img: string.isRequired,
  width: number.isRequired,
  height: number.isRequired,
  text: object.isRequired,
  industry: string.isRequired
};

const defaultProps = {
  width: 0,
  height: 50
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
}) => (
  <a
    id={id}
    className={cx(
      `${className} project d-flex flex-column align-items-start my-3 px-4 py-3 rounded`
    )}
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
ProjectCard.defaultProps = defaultProps;
export default ProjectCard;
