import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { object } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProjectCard from "./ProjectCard";

import HostGator from "../../../../assets/img/hostgator-logo.svg";
import Martian from "../../../../assets/img/martian-text-logo.svg";
import Homies from "../../../../assets/img/homies-logo.png";
import Terra from "../../../../assets/img/terra-ats-logo.png";
import Ethereum from "../../../../assets/img/ethereum-logo.png";

import "./index.css";

const propTypes = {
  github: object.isRequired
};

const defaultProps = {
  github: {}
};

const projects = {
  coinflip: {
    id: "coinflipProjectCard",
    className: "coinflip-project-card",
    url: "https://github.com/santdeleon/coinflip",
    img: Ethereum,
    width: 40,
    text:
      "Decentralized gambling <br /> application built on the <br /> Ethereum Network",
    industry: "Blockchain, Gambling & Gaming"
  },
  hostgator: {
    id: "hostgatorProjectCard",
    className: "hostgator-project-card",
    url: "https://www.hostgator.com/",
    img: HostGator,
    width: 120,
    text:
      "Platform for entrepeuners <br /> & businesses to create,<br /> host & manage websites",
    industry: "Domain & Web Hosting"
  },
  terra: {
    id: "terraProjectCard",
    className: "terra-project-card",
    url: "https://www.terraats.com/",
    img: Terra,
    width: 90,
    text:
      "Small in-house tech <br /> solution for custom <br /> software applications",
    industry: "Software Services & IT Solutions"
  },
  homies: {
    id: "homiesProjectCard",
    className: "homies-project-card",
    url: "#",
    img: Homies,
    width: 70,
    text:
      "Grassroots startup helping <br /> brands get off the ground <br /> & sell online",
    industry: "Branding & E-Commerce"
  },
  martian: {
    id: "martianProjectCard",
    className: "martian-project-card",
    url: "http://martian.network/",
    img: Martian,
    width: 120,
    text:
      "Blockchain solution for <br /> monetizing, distributing <br /> & hosting content",
    industry: "Blockchain & Content Management"
  }
};

const Portfolio = ({ github }) => {
  return (
    <Container id="Portfolio" className="Portfolio py-5" fluid>
      <Row className="mb-5">
        <Col className="text-center">
          <h4 className="font-weight-light text-muted">Meet some companies</h4>
          <h5>
            I've had the pleasure <br /> to work with
          </h5>
        </Col>
      </Row>

      <Row className="my-3">
        {Object.keys(projects).map((project, index) => (
          <Col xs={12} lg={6} key={projects[project].id}>
            <ProjectCard
              name={project}
              id={projects[project].id}
              className={projects[project].className}
              url={projects[project].url}
              img={projects[project].img}
              width={projects[project].width}
              height={50}
              text={projects[project].text}
              industry={projects[project].industry}
            />
          </Col>
        ))}
      </Row>

      <Row className="mt-5 mb-3 px-5">
        <Col className="text-center">
          <a
            href="https://github.com/santdeleon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark custom-button"
            aria-label="Github"
            title="Github"
            style={{ textDecoration: "none" }}
          >
            See more work <FontAwesomeIcon icon={github} />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

Portfolio.propTypes = propTypes;
Portfolio.defaultProps = defaultProps;
export default Portfolio;
