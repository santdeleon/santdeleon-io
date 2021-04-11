import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useBrand, useTheme } from '../hooks';
import { Emoji } from '.';

const Footer = () => {
  const { theme } = useTheme();
  const { social } = useBrand();

  return (
    <footer>
      <Navbar className="p-0">
        <Nav className="mr-auto">
          <p className="font-weight-light mb-0 text-muted">
            Made with
            <Emoji ariaLabel="Two Hearts Emoji" className="mx-1">
              💕
            </Emoji>
            by Sant
          </p>
        </Nav>
        <Nav className="ml-auto">
          {social.map(({ id, name, color, href, icon }) => (
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
              <FontAwesomeIcon icon={icon} />
            </Nav.Link>
          ))}
        </Nav>
      </Navbar>
    </footer>
  );
};

export default Footer;
