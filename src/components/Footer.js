import React from 'react';
import cx from 'classnames';
import styled from 'styled-components';

import { Navbar, Nav } from '.';

import { useBrand } from '../hooks';

const FixedDiv = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
`;

const Footer = ({ ...props }) => {
  const { social } = useBrand();

  return (
    <>
      {/* Large Screens */}
      <FixedDiv className="d-none d-md-flex align-items-center px-8">
        <Navbar className="w-100">
          <Nav>
            {social.map(({ id, name, href, Emoji }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={cx({
                  'ml-5': id !== 0,
                })}
              >
                {Emoji} {name}
              </a>
            ))}
          </Nav>
          <Nav className="ml-auto d-none d-md-flex">
            commit:
            <a
              href="https://github.com/santdeleon/santdeleon-io/commit/00d683fa48a5d33f962e003fb9283418cc9a00bc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              00d683fa
            </a>
          </Nav>
        </Navbar>
      </FixedDiv>
      {/* Small Screens */}
      <Navbar className="d-flex d-md-none">
        <Nav>
          {social.map(({ id, name, href, Emoji }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={cx({
                'ml-5': id !== 0,
              })}
            >
              {Emoji} {name}
            </a>
          ))}
        </Nav>
      </Navbar>
    </>
  );
};

export default Footer;
