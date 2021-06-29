import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaAngellist } from 'react-icons/fa';
import cx from 'classnames';

import { useTheme } from '../theme';

import {
  SANTDELEONIO_GITHUB_URL,
  URL_LINKEDIN,
  URL_ANGELLIST,
  URL_CONTACT,
} from '../constants';

import Emoji from './Emoji';

interface Link {
  title: string;
  href: string;
  Icon: React.ReactNode;
}

const Footer: React.FC = () => {
  const { theme } = useTheme();

  const links: Link[] = [
    {
      title: 'Github',
      href: SANTDELEONIO_GITHUB_URL,
      Icon: <FaGithub />,
    },
    {
      title: 'LinkedIn',
      href: URL_LINKEDIN,
      Icon: <FaLinkedin />,
    },
    {
      title: 'Angellist',
      href: URL_ANGELLIST,
      Icon: <FaAngellist />,
    },
    {
      title: 'Contact Me',
      href: URL_CONTACT,
      Icon: <FaEnvelope />,
    },
  ];

  return (
    <footer>
      {/* <Navbar className="p-0">
        <Nav className="mr-auto">
          <p className="font-weight-light mb-0 text-muted">
            Made with
            <Emoji ariaLabel="Two Hearts Emoji" className="ml-2 mr-1">
              💕
            </Emoji>
            by Sant
          </p>
        </Nav>
        <Nav className="ml-auto">
          {links.map(({ title, href, Icon }: Link, idx: number) => (
            <Nav.Link
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={cx({
                'text-secondary': theme === 'light',
                'text-light': theme === 'dark',
              })}
              title={title}
              aria-label={title}
            >
              {Icon}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar> */}
    </footer>
  );
};

export default Footer;
