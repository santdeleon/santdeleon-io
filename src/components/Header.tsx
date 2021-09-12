import React from 'react';
import {
  FaEthereum,
  FaCode,
  FaPalette,
  FaRobot,
  FaMugHot,
} from 'react-icons/fa';
import styled from 'styled-components';
import cx from 'classnames';

import { useTheme } from '../theme';

import { URL_SANTDELEONIO_GITHUB } from '../constants';

import { Emoji } from './Emoji';
import { Row } from './Row';
import { Col } from './Col';
import { Button } from './Button';
import { Link } from './Link';

import SantLight from '../assets/img/sant-light.svg';
import SantDark from '../assets/img/sant-dark.svg';
import GithubLight from '../assets/img/github-light.svg';
import GithubDark from '../assets/img/github-dark.svg';

const H1 = styled.h1<{
  margin?: string;
}>`
  font-weight: 500;
  margin: ${({ margin }) => margin ?? '0 0 10px 0'};
`;

const DesktopH1 = styled(H1)`
  display: none;
  ${({ theme }) => theme.media.greaterThan('md')`
    display: block;
  `}
`;

const DesktopP = styled.p`
  display: none;
  ${({ theme }) => theme.media.greaterThan('md')`
    display: block;
  `}
`;

const MobileP = styled.p`
  display: block;
  ${({ theme }) => theme.media.greaterThan('md')`
    display: none;
  `}
`;

const SkillCard = styled.div`
  border-radius: 6px;
  box-shadow: ${({ theme }) =>
    theme.mode === 'dark'
      ? '0 7px 7px rgba(0, 0, 0, 0.6)'
      : '0 7px 7px rgba(0, 0, 0, 0.2)'};
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? '#222222' : '#FFFFFF'};
  display: none;
  ${({ theme }) => theme.media.greaterThan('xs')`
    display: block;
  `};
  &:not(.last-child) {
    margin: 0 15px 0 0;
  }
`;

const SkillCardHeader = styled.div`
  border-radius: 5px 5px 0 0;
  background-color: ${({ color }) => color};
  height: 8px;
`;

const SkillCardBody = styled(Col)`
  padding: 1rem;
  text-align: center;
`;

interface SkillProps {
  text: string;
  color: string;
  Icon: React.ReactNode;
}

const skills: SkillProps[] = [
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

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <Row justify="space-between" margin="1rem 0">
        <img
          src={theme === 'light' ? SantLight : SantDark}
          alt={`Sant & ${theme === 'light' ? 'Sun' : 'Moon'}`}
          width={100}
        />
        <div>
          <Row>
            <Link
              margin="0 0.5rem 0 0"
              href={URL_SANTDELEONIO_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
            >
              <img
                src={theme === 'light' ? GithubLight : GithubDark}
                alt="Github"
              />
            </Link>
            <Button
              fontSize="1.6rem"
              bgColor="transparent"
              onClick={toggleTheme}
            >
              <Emoji
                ariaLabel={`${theme === 'light' ? 'Full Moon' : 'Sun'} Emoji`}
              >
                {theme === 'light' ? '🌕' : '☀️'}
              </Emoji>
            </Button>
          </Row>
        </div>
      </Row>
      <Row margin="0 0 2rem 0">
        <Col>
          <H1 margin="0 0 0.5rem 0">Hello, I&apos;m Sant,</H1>
          <DesktopH1>Front-end & Blockchain Engineer</DesktopH1>
          <DesktopP className="lead text-muted d-none d-md-block">
            with a knack for creating cutting edge products with elegance and
            style. <Emoji ariaLabel="Sparkle Emoji">✨</Emoji>
          </DesktopP>
          <MobileP className="lead text-muted d-block d-md-none">
            Front-end & Blockchain Engineer
          </MobileP>
        </Col>
      </Row>
      <Row justify="space-between" margin="0 0 4rem 0">
        {skills.map(({ text, color, Icon }: SkillProps, idx: number) => (
          <Col key={idx}>
            <SkillCard
              className={cx({
                'last-child': idx === skills.length - 1,
              })}
            >
              <SkillCardHeader color={color} />
              <SkillCardBody align="center">
                <DesktopP>{text}</DesktopP>
                <MobileP>{Icon}</MobileP>
              </SkillCardBody>
            </SkillCard>
          </Col>
        ))}
      </Row>
    </header>
  );
};

export default Header;
