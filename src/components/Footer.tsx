import React, { FC } from 'react';
import { FaAngellist, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';
import { URL_ANGELLIST, URL_CONTACT, URL_LINKEDIN, URL_SANTDELEONIO_GITHUB } from '../constants';
import { Emoji } from './Emoji';
import { Link } from './Link';
import { Row } from './Row';
import { Text } from './Text';

const StyledFooter = styled.footer`
  margin-bottom: 1rem;
  border-width: 2px 0 0 0;
  border-style: solid;
  border-color: ${({ theme }) => (theme.mode === 'dark' ? '#302f2f' : '#f4f2f2')};
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
    href: URL_SANTDELEONIO_GITHUB,
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

const Footer: FC = () => (
  <StyledFooter>
    <Row justify="space-between">
      <Text color="#777777">
        Made with
        <Emoji ariaLabel="Two Hearts Emoji" margin="0 0 0 6px">
          💕
        </Emoji>{' '}
        by Sant
      </Text>
      <nav>
        {links.map(({ title, href, Icon }, idx) => (
          <Link key={idx} href={href} title={title} margin="0 0 0 1rem">
            {Icon}
          </Link>
        ))}
      </nav>
    </Row>
  </StyledFooter>
);

export default Footer;
