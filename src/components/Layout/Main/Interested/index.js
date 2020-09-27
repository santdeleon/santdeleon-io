import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { string } from "prop-types";

import "./index.css";

const propTypes = {
  theme: string.isRequired
};

const Interested = ({ theme }) => (
  <Container className="pt-5">
    <div className="hyphens" />
    <Row className="Interested text-center mt-5">
      <Col className="d-flex justify-content-center align-items-center">
        <p className="px-2">
          Interested? Let's grab
          <a
            href="mailto:sant@santdeleon.io"
            className="coffee ml-2 pt-2 px-2 pb-0"
            title="Contact"
            aria-label="Contact"
            style={
              theme === "light"
                ? { borderBottom: "5px solid #000" }
                : { borderBottom: "5px solid #fff" }
            }
          >
            {[
              { id: 0, className: "red", text: "c" },
              { id: 1, className: "orange", text: "o" },
              { id: 2, className: "yellow", text: "f" },
              { id: 3, className: "yellow", text: "f" },
              { id: 4, className: "green", text: "e" },
              { id: 5, className: "blue", text: "e" },
              { id: 6, className: "purple", text: "!" }
            ].map(({ id, className, text }) => (
              <span key={id} className={className}>
                {text}
              </span>
            ))}
          </a>
        </p>
      </Col>
    </Row>
  </Container>
);

Interested.propTypes = propTypes;
export default Interested;
