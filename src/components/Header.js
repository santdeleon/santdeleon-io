import React from 'react';
import { Row, Col, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';

import { Emoji, ToggleSwitch } from '.';

import { useBrand, useTheme } from '../hooks';

import SantLight from '../assets/img/sant-light.svg';
import SantDark from '../assets/img/sant-dark.svg';
import GithubLight from '../assets/img/github-light.svg';
import GithubDark from '../assets/img/github-dark.svg';
import Moon from '../assets/img/moon.svg';

const Header = () => {
  const { skills } = useBrand();
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <Row>
        <Col>
          <Row>
            <Col className="d-flex align-items-center justify-content-between">
              <img
                src={theme === 'light' ? SantLight : SantDark}
                alt={theme === 'light' ? 'Sant & Sun' : 'Sant & Moon'}
                width={100}
              />
              <Nav className="ml-auto align-items-center">
                <Button
                  variant="link"
                  href="https://github.com/santdeleon"
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
              <ToggleSwitch
                title={`Activate ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
                ariaLabel={`Activate ${
                  theme === 'light' ? 'Dark' : 'Light'
                } Mode`}
                on={theme === 'light' ? 'false' : 'true'}
                onClick={toggleTheme}
              >
                <img src={Moon} alt="Moon" aria-label="Moon" width={25} />
              </ToggleSwitch>
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
        {skills.map(({ color, name, icon }, idx) => (
          <Col key={idx}>
            <div className="rounded">
              <div className="rounded-top py-1" style={{ background: color }} />
              <div
                className={cx('d-flex justify-content-center py-3', {
                  shadow: theme === 'light',
                  'shadow-lg': theme === 'dark',
                })}
              >
                <p className="mb-0 d-none d-lg-block">{name}</p>
                <FontAwesomeIcon className="d-block d-lg-none" icon={icon} />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </header>
  );
};

export default Header;
