import React from "react";
import { Row, Col } from "react-bootstrap";
import { string } from "prop-types";

import "./index.css";

const propTypes = {
  theme: string.isRequired
};

const defaultProps = {
  theme: ""
};

const Interested = ({ theme }) => (
  <Row className="Interested text-center py-5">
    <Col className="d-flex justify-content-center align-items-center">
      <h1 className="px-2">
        Interested? Let's grab
        <a
          href="/contact"
          className="coffee ml-2 pt-2 px-2 pb-0"
          title="Contact"
          aria-label="Contact"
          style={
            theme === "light"
              ? { borderBottom: "5px solid #000" }
              : { borderBottom: "5px solid #fff" }
          }
        >
          <span className="red">c</span>
          <span className="orange">o</span>
          <span className="yellow">f</span>
          <span className="yellow">f</span>
          <span className="green">e</span>
          <span className="blue">e</span>
          <span className="purple">!</span>
        </a>
      </h1>
    </Col>
  </Row>
);

Interested.propTypes = propTypes;
Interested.defaultProps = defaultProps;
export default Interested;
