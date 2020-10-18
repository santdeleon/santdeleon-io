import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import cx from "classnames";
import { string, array } from "prop-types";

import ProjectCard from "./ProjectCard";

import "./index.css";

const propTypes = {
  theme: string.isRequired,
  projects: array.isRequired
};

const Portfolio = ({ theme, projects }) => (
  <div
    id="Portfolio"
    className={cx("Portfolio py-5", {
      "bg-light": theme === "light"
    })}
    style={{ backgroundColor: theme === "dark" && "black" }}
  >
    <Row className="justify-content-center">
      <Col
        className={cx("rounded-circle", {
          "bg-light": theme === "light"
        })}
        style={{
          marginTop: "-120px",
          backgroundColor: theme === "dark" && "black"
        }}
      >
        <Button
          variant=""
          href="#Portfolio"
          className="w-100 h-100 text-transparent"
        >
          &nbsp;
        </Button>
      </Col>
    </Row>

    <Container>
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
    </Container>
  </div>
);

Portfolio.propTypes = propTypes;
export default Portfolio;
