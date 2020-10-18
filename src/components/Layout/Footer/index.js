import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { useBrand } from "../../../context/useBrand";

const Footer = () => {
  const { socialIcons } = useBrand();

  return (
    <Row className="Footer text-center">
      <Col>
        {socialIcons.map(({ id, name, href, Icon }) => (
          <Button
            variant="link"
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted"
          >
            {Icon}
          </Button>
        ))}
        <p className="text-muted">
          Made with{" "}
          <FontAwesomeIcon className="text-danger mx-1" icon={faHeart} /> by
          Sant
        </p>
      </Col>
    </Row>
  );
};

export default Footer;
