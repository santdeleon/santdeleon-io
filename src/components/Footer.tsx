import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaAngellist } from 'react-icons/fa';
import styled from 'styled-components';

import {
  SANTDELEONIO_GITHUB_URL,
  URL_LINKEDIN,
  URL_ANGELLIST,
  URL_CONTACT,
} from '../constants';

import { Emoji } from './Emoji';
import { Row } from './Row';
import { Link } from './Link';

const StyledFooter = styled.footer`
  margin-bottom: 1rem;
  border-width: 1px 0 0 0;
  border-style: solid;
  border-color: ${({ theme }) =>
    theme.mode === 'dark' ? '#302f2f' : '#f4f2f2'};
  padding-top: 1rem;
`;

interface LinksProps {
  title: string;
  href: string;
  Icon: React.ReactNode;
}

const links: LinksProps[] = [
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

const Footer: React.FC = () => (
  <StyledFooter>
    <Row justify="space-between">
      <p>
        Made with
        <Emoji ariaLabel="Two Hearts Emoji" margin="0 0 0 6px">
          💕
        </Emoji>{' '}
        by Sant
      </p>
      <nav>
        {links.map(({ title, href, Icon }: LinksProps, idx: number) => (
          <Link key={idx} href={href} title={title} margin="0 0 0 1rem">
            {Icon}
          </Link>
        ))}
      </nav>
    </Row>
  </StyledFooter>
);

export default Footer;
