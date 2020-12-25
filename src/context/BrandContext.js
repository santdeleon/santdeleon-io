import React, { createContext } from 'react';
import { oneOfType, array, object } from 'prop-types';
import { Folder, Code, MessageCircle } from 'react-feather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngellist,
  faLinkedinIn,
  faEthereum,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faCode,
  faPalette,
  faRobot,
  faMugHot,
} from '@fortawesome/free-solid-svg-icons';

import HostGator from '../assets/img/hostgator.png';
// import Martian from "../assets/img/martian.svg";
import Terra from '../assets/img/terra.png';
import Ethereum from '../assets/img/ethereum.svg';

const propTypes = {
  children: oneOfType([array, object]),
};

const navData = [
  {
    id: 0,
    name: 'Portfolio',
    href: '#Portfolio',
    Icon: <Folder size="20" height={16} />,
  },
  {
    id: 1,
    name: 'Technologies',
    href: '#Footer',
    Icon: <Code size="20" height={16} />,
  },
  {
    id: 2,
    name: 'Get in touch',
    href: 'mailto:sant@santdeleon.io',
    Icon: <MessageCircle size="20" height={16} />,
  },
];

const socialIcons = [
  {
    id: 0,
    name: 'GitHub',
    href: 'https://github.com/santdeleon',
    Icon: <FontAwesomeIcon icon={faGithub} />,
  },
  {
    id: 1,
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sant-deleon/',
    Icon: <FontAwesomeIcon icon={faLinkedinIn} />,
  },
  {
    id: 2,
    name: 'Angellist',
    href: 'https://angel.co/santdeleon',
    Icon: <FontAwesomeIcon icon={faAngellist} />,
  },
  {
    id: 3,
    name: 'Contact',
    href: 'mailto:sant@santdeleon.io',
    Icon: <FontAwesomeIcon icon={faEnvelope} />,
  },
];

const skills = [
  {
    id: 0,
    name: 'Front-end Developer',
    color: '#F76F6E',
    Icon: <FontAwesomeIcon icon={faCode} />,
  },
  {
    id: 1,
    name: 'Blockchain Engineer',
    color: '#FBC07A',
    Icon: <FontAwesomeIcon icon={faEthereum} />,
  },
  {
    id: 2,
    name: 'UI/UX Designer-ish',
    color: '#FCE073',
    Icon: <FontAwesomeIcon icon={faPalette} />,
  },
  {
    id: 3,
    name: 'Tech Enthusiast',
    color: '#A5F29F',
    Icon: <FontAwesomeIcon icon={faRobot} />,
  },
  {
    id: 4,
    name: 'Coffee Drinker',
    color: '#82E1F3',
    Icon: <FontAwesomeIcon icon={faMugHot} />,
  },
];

const projects = [
  {
    id: 1,
    name: 'HostGator',
    href: 'https://www.hostgator.com/',
    img: <img src={HostGator} alt="HostGator" style={{ width: '10rem' }} />,
    color: '#FDDFA4',
    emoji: (
      <span role="img" alt="Crocodile Emoji" aria-label="Crocodile Emoji">
        🐊
      </span>
    ),
    industry: 'Domain & Web Hosting',
    role: 'Software Engineer',
  },
  {
    id: 2,
    name: 'Coinflip',
    href: 'https://github.com/santdeleon/coinflip',
    img: <img src={Ethereum} alt="Ethereum" style={{ width: '7.5rem' }} />,
    color: '#ffe8a0',
    emoji: (
      <span role="img" alt="Money Bag Emoji" aria-label="Money Bag Emoji">
        💰
      </span>
    ),
    industry: 'Blockchain Gaming',
    role: 'UI/UX & Blockchain Engineer',
  },
  {
    id: 3,
    name: 'Terra ATS',
    href: 'https://www.terraats.com/',
    img: <img src={Terra} alt="TerraAts" style={{ width: '7.5rem' }} />,
    color: '#10242D',
    emoji: (
      <span
        role="img"
        alt="Globe Showing Americas Emoji"
        aria-label="Globe Showing Americas Emoji"
      >
        🌎
      </span>
    ),
    industry: 'IT & SaaS Solutions',
    role: 'Software Engineering Intern',
  },
];

const technologies = [
  {
    id: 0,
    name: 'Frontend',
    languages: [
      'HTML/CSS',
      'JavaScript',
      'React',
      'Redux',
      'GatsbyJS',
      'NodeJS',
      'jQuery',
      'KnockoutJS',
    ],
  },
  {
    id: 1,
    name: 'Frontend',
    languages: [
      'Jest',
      'Mocha',
      'Chai',
      'SCSS',
      'Template Toolkit',
      'Bootstrap',
      'Storybook',
      'Lerna',
    ],
  },
  {
    id: 2,
    name: 'Blockchain',
    languages: [
      'Solidity',
      'Web3',
      '@web3/react',
      'EthersJS',
      '@ethersproject',
      'Oraclize',
      'OpenZepplin',
      'Ganache',
      'Truffle Suite',
      'Ethereum Testnets',
    ],
  },
  {
    id: 3,
    name: 'Backend',
    languages: ['Java', 'Perl', 'VIM', 'MongoDB', 'Express'],
  },
];

const BrandContext = createContext();

const BrandProvider = ({ children }) => (
  <BrandContext.Provider
    value={{ navData, socialIcons, skills, projects, technologies }}
  >
    {children}
  </BrandContext.Provider>
);

BrandProvider.propTypes = propTypes;
export { BrandContext, BrandProvider };
