import React, { useState } from "react";
import { string, object, func } from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import "./index.css";

import NavMenu from "../../components/Layout/NavMenu";

const propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
  particles: object.isRequired
};

const defaultProps = {
  theme: "",
  toggleTheme: () => {},
  particles: {}
};

const Contact = ({ theme, toggleTheme, particles }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const whichTheme = {
    backgroundColor: theme === "light" ? "#fff" : "#212121"
  };

  const clearForm = e => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  window.onload = () => {
    document.title = "Sant | Contact";

    particles.init({
      selector: ".background"
    });
  };

  return (
    <>
      <NavMenu
        isOnContactPage={true}
        clearForm={clearForm}
        particles={particles}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <div className="hyphens"></div>

      <Container id="Contact" className="Contact" fluid>
        <Row className="mt-5">
          <Col>
            <h2 className="text-center">
              Hey, you made it! <br /> What can I do for you today?
            </h2>
          </Col>
        </Row>

        <Form
          action="https://formspree.io/sant@santdeleon.co"
          id="contactForm"
          method="POST"
        >
          <Form.Group controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
              style={whichTheme}
              required
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              className="pl-2"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email"
              style={whichTheme}
              required
            />
            <Form.Text className="text-muted">
              No worries! I won't share your email with anyone.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="message">
            <Form.Label>Message:</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              name="message"
              className="pl-2 pt-2 contact-textarea"
              value={message}
              rows={5}
              onChange={e => setMessage(e.target.value)}
              placeholder="Tell me what you're thinking..."
              style={whichTheme}
              required
            />
          </Form.Group>

          <Row className="mt-4">
            <Col className="text-center">
              <Button
                className="custom-button contact-button pt-2 btn-block"
                type="submit"
              >
                Send
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;
export default Contact;
