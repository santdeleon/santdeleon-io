import React, { createContext, useContext } from "react";
import { Folder, Code, MessageCircle } from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngellist,
  faLinkedinIn,
  faEthereum
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faCode,
  faPalette,
  faRobot,
  faMugHot
} from "@fortawesome/free-solid-svg-icons";

import HostGator from "../assets/img/hostgator-logo.svg";
import Martian from "../assets/img/martian-text-logo.svg";
import Homies from "../assets/img/homies-logo.png";
import Terra from "../assets/img/terra-ats-logo.png";
import Ethereum from "../assets/img/ethereum-logo.png";

const navData = [
  {
    id: 0,
    name: "Portfolio",
    href: "#Portfolio",
    Icon: <Folder size="20" height={16} />
  },
  {
    id: 1,
    name: "Technologies",
    href: "#Tech",
    Icon: <Code size="20" height={16} />
  },
  {
    id: 2,
    name: "Get in touch",
    href: "mailto:sant@santdeleon.io",
    Icon: <MessageCircle size="20" height={16} />
  }
];

const socialIcons = [
  {
    id: 0,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sant-deleon/",
    Icon: <FontAwesomeIcon icon={faLinkedinIn} />
  },
  {
    id: 1,
    name: "Angellist",
    href: "https://angel.co/santdeleon",
    Icon: <FontAwesomeIcon icon={faAngellist} />
  },
  {
    id: 2,
    name: "Contact",
    href: "mailto:sant@santdeleon.io",
    Icon: <FontAwesomeIcon icon={faEnvelope} />
  }
];

const skills = [
  {
    id: 0,
    name: "Blockchain Engineer",
    color: "#F76F6E",
    Icon: <FontAwesomeIcon icon={faEthereum} />
  },
  {
    id: 1,
    name: "Front-end Developer",
    color: "#FBC07A",
    Icon: <FontAwesomeIcon icon={faCode} />
  },
  {
    id: 2,
    name: "UI/UX Designer-ish",
    color: "#FCE073",
    Icon: <FontAwesomeIcon icon={faPalette} />
  },
  {
    id: 3,
    name: "Tech Enthusiast",
    color: "#A5F29F",
    Icon: <FontAwesomeIcon icon={faRobot} />
  },
  {
    id: 4,
    name: "Coffee Drinker",
    color: "#82E1F3",
    Icon: <FontAwesomeIcon icon={faMugHot} />
  }
];

const projects = [
  {
    id: "coinflipProjectCard",
    name: "coinflip",
    className: "coinflip-project-card",
    url: "https://github.com/santdeleon/coinflip",
    img: Ethereum,
    width: 50,
    text: (
      <p className="font-weight-bold m-0">
        Decentralized gambling <br /> application built on the <br /> Ethereum
        Network
      </p>
    ),
    industry: "Blockchain, Gambling & Gaming"
  },
  {
    id: "hostgatorProjectCard",
    name: "hostgator",
    className: "hostgator-project-card",
    url: "https://www.hostgator.com/",
    img: HostGator,
    width: 120,
    text: (
      <p className="font-weight-bold m-0">
        Platform for entrepeuners <br /> & businesses to create,
        <br /> host & manage websites
      </p>
    ),
    industry: "Domain & Web Hosting"
  },
  {
    id: "terraProjectCard",
    name: "terra",
    className: "terra-project-card",
    url: "https://www.terraats.com/",
    img: Terra,
    width: 90,
    text: (
      <p className="font-weight-bold m-0">
        Small in-house tech <br /> solution for custom <br /> software
        applications
      </p>
    ),
    industry: "Software Services & IT Solutions"
  },
  {
    id: "homiesProjectCard",
    name: "homies",
    className: "homies-project-card",
    url: "#",
    img: Homies,
    width: 70,
    text: (
      <p className="font-weight-bold m-0">
        Grassroots startup helping <br /> brands get off the ground <br /> &
        sell online
      </p>
    ),
    industry: "Branding & E-Commerce"
  },
  {
    id: "martianProjectCard",
    name: "martian",
    className: "martian-project-card",
    url: "http://martian.network/",
    img: Martian,
    width: 120,
    text: (
      <p className="font-weight-bold m-0">
        Blockchain solution for <br /> monetizing, distributing <br /> & hosting
        content
      </p>
    ),
    industry: "Blockchain & Content Management"
  }
];

const technologies = [
  {
    id: 1,
    name: "Blockchain",
    languages: [
      "Solidity",
      "Web3",
      "React",
      "JavaScript",
      "HTML/CSS",
      "Chai",
      "Mocha",
      "@web3/react",
      "EthersJS"
    ]
  },
  {
    id: 2,
    name: "Frontend",
    languages: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "Redux",
      "GatsbyJS",
      "NodeJS",
      "jQuery",
      "KnockoutJS",
      "Jest",
      "Mocha",
      "Chai",
      "SCSS",
      "PugJS",
      "Template Toolkit",
      "Bootstrap",
      "Bulma",
      "Materialize",
      "Storybook",
      "Lerna"
    ]
  },
  {
    id: 3,
    name: "Backend",
    languages: ["Java", "Perl", "VIM", "MongoDB", "Express"]
  }
];

const BrandContext = createContext();

const BrandProvider = ({ children }) => (
  <BrandContext.Provider
    value={{ navData, socialIcons, skills, projects, technologies }}
    children={children}
  />
);

const useBrand = () => {
  const context = useContext(BrandContext);
  if (!context) throw new Error("You must useBrand within a <BrandProvider />");
  return context;
};

export { BrandContext, BrandProvider, useBrand };
