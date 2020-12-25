import React from 'react';
import { Row, Col, Navbar, Nav } from 'react-bootstrap';
import cx from 'classnames';

import { useBrand } from '../../../hooks/useBrand.js';
import { useTheme } from '../../../hooks/useTheme.js';

import Emoji from '../../../components/Emoji';

import './index.css';

const Footer = () => {
  const { theme } = useTheme();
  const { socialIcons, technologies } = useBrand();
  const dateLastUpdated = 'December 25, 2020';

  return (
    <footer
      id="Footer"
      className={cx('Footer border-top px-3 px-sm-5', {
        'border-dark': theme === 'dark',
      })}
    >
      <p className="mb-0 py-4">
        <small>
          Website last updated: {dateLastUpdated}{' '}
          <Emoji ariaLabel="Christmas Tree" unicode="🎄" />
          <Emoji ariaLabel="Wrapped Gift" unicode="🎁" className="mx-1" />
          <Emoji ariaLabel="Santa Claus" unicode="🎅" />
        </small>
      </p>
      <h5>Languages</h5>
      <Row>
        <Col xs={12} lg={8}>
          <Row>
            {technologies.map(({ id, name, languages }) => (
              <Col key={id} xs={12} sm={3}>
                <ul className="p-0">
                  <li
                    className={cx('Footer__Li font-weight-bold', {
                      'text-dark': theme === 'light',
                      'text-light': theme === 'dark',
                    })}
                  >
                    {id === 1 ? <span>&nbsp;</span> : name}
                  </li>
                  {languages.map((language, i) => (
                    <li key={i} className="Footer__Li mt-1">
                      {language}
                    </li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={12} lg={4} className="text-left text-lg-right">
          <p className="mb-0 font-weight-light">
            Give me a shout{' '}
            <a
              href="mailto:sant@santdeleon.io"
              className={cx(
                'Footer__A--contact font-weight-bold text-decoration-none',
                {
                  'App--rainbow-text': theme === 'dark',
                  'Footer--border-bottom': theme === 'light',
                },
              )}
              title="Contact Sant"
              aria-label="Contact Sant"
            >
              sant@santdeleon.io
            </a>
          </p>
          <p className="font-weight-light">
            Let&apos;s get{' '}
            <span
              className={cx('font-weight-bold', {
                'Footer--border-bottom text-dark': theme === 'light',
                'text-light': theme === 'dark',
              })}
            >
              coffee
            </span>{' '}
            <span role="img" aria-label="Coffee Emoji">
              ☕
            </span>
          </p>
        </Col>
      </Row>
      <Navbar className="p-0">
        <Nav className="mr-auto">
          <p
            className={cx('font-weight-light mb-0', {
              'App--rainbow-text': theme === 'dark',
            })}
          >
            Made with
            <span role="img" aria-label="Two Hearts Emoji" className="mx-2">
              💕
            </span>
            by Sant
          </p>
        </Nav>
        <Nav className="ml-auto">
          {socialIcons.map(({ id, name, color, href, Icon }) => (
            <Nav.Link
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={cx({
                'text-secondary': theme === 'light',
                'text-light': theme === 'dark',
              })}
              title={name}
              aria-label={name}
            >
              {Icon}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar>
    </footer>
  );
};

export default Footer;
