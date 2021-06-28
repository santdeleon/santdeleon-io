import React from 'react';
import { Row, Col, Nav, Button } from 'react-bootstrap';
import {
  FaEthereum,
  FaCode,
  FaPalette,
  FaRobot,
  FaMugHot,
} from 'react-icons/fa';
import cx from 'classnames';

import { useTheme } from '../theme';

import { routes } from '../utils/routes';

import Emoji from './Emoji';

import SantLight from '../assets/img/sant-light.svg';
import SantDark from '../assets/img/sant-dark.svg';
import GithubLight from '../assets/img/github-light.svg';
import GithubDark from '../assets/img/github-dark.svg';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const skills = [
    {
      text: 'Front-end Developer',
      color: '#F76F6E',
      Icon: <FaCode />,
    },
    {
      text: 'Blockchain Engineer',
      color: '#FBC07A',
      Icon: <FaEthereum />,
    },
    {
      text: 'UI/UX Designer-ish',
      color: '#FCE073',
      Icon: <FaPalette />,
    },
    {
      text: 'Tech Enthusiast',
      color: '#A5F29F',
      Icon: <FaRobot />,
    },
    {
      text: 'Coffee Drinker',
      color: '#82E1F3',
      Icon: <FaMugHot />,
    },
  ];

  return (
    <header>
      <Row>
        <Col>
          <Row>
            <Col className="d-flex align-items-center justify-content-between">
              <img
                src={theme === 'light' ? SantLight : SantDark}
                alt={`Sant & ${theme === 'light' ? 'Sun' : 'Moon'}`}
                width={100}
              />
              <Nav className="ml-auto align-items-center">
                <Button
                  variant="link"
                  href={routes.urlCreatorGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-0 mr-3"
                  title="Github"
                  aria-label="Github"
                >
                  <img
                    src={theme === 'light' ? GithubLight : GithubDark}
                    alt="Github"
                  />
                </Button>
              </Nav>
              <Button
                variant="transparent"
                className="p-0"
                onClick={toggleTheme}
              >
                <Emoji
                  ariaLabel={`${theme === 'light' ? 'Full Moon' : 'Sun'} Emoji`}
                  className="h4"
                >
                  {theme === 'light' ? '🌕' : '☀️'}
                </Emoji>
              </Button>
            </Col>
          </Row>
          <h1 className="font-weight-light mb-0">Hello, I&apos;m Sant,</h1>
          <h1 className="font-weight-light d-none d-md-block">
            Front-end & Blockchain Engineer
          </h1>
          <p className="lead text-muted d-none d-md-block">
            with a knack for creating cutting edge products with elegance and
            style. <Emoji ariaLabel="Sparkle Emoji">✨</Emoji>
          </p>
          <p className="lead text-muted d-block d-md-none">
            Front-end & Blockchain Engineer{' '}
          </p>
        </Col>
      </Row>
      <Row>
        {skills.map(({ text, color, Icon }, idx) => (
          <Col key={idx}>
            <div className="rounded">
              <div className="rounded-top py-1" style={{ background: color }} />
              <div
                className={cx('d-flex border justify-content-center py-3', {
                  'border-light shadow-sm': theme === 'light',
                  'border-0 shadow-lg': theme === 'dark',
                })}
              >
                <p className="mb-0 d-none d-lg-block">{text}</p>
                <span className="d-block d-lg-none">{Icon}</span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </header>
  );
};

export default Header;
