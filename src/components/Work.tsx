import React from 'react';
import styled from 'styled-components';

import { useTheme } from '../theme';

import { Grid } from './Grid';
import { GridItem } from './GridItem';
import { Row } from './Row';
import { Col } from './Col';
import { Link } from './Link';

import GithubLight from '../assets/img/github-light.svg';
import GithubDark from '../assets/img/github-dark.svg';
import HostGator from '../assets/img/hostgator.png';
import Ethereum from '../assets/img/ethereum.svg';
import Amoeba from '../assets/img/amoeba-dynamic.svg';
import AmoebaAndFriends from '../assets/img/amoeba-and-friends.svg';
import Phantom from '../assets/img/phantom.png';
import Sant from '../assets/img/sant.svg';

const StyledSection = styled.section`
  margin-bottom: 4rem;
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding: 1.25rem;
  box-shadow: ${({ theme }) =>
    theme.mode === 'dark'
      ? '0 7px 7px rgba(0, 0, 0, 0.6)'
      : '0 7px 7px rgba(0, 0, 0, 0.2)'};
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? '#222222' : '#FFFFFF'};
  transform: scale(1);
  transition: transform 0.2s ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledH4 = styled.h4`
  margin: 0 0 0.25rem 0;
`;

const ImgContainer = styled(Row)<{ bgColor?: string }>`
  padding: 1rem 0;
  height: 150px;
  background-color: ${({ bgColor }) => bgColor};
  img {
    height: 80%;
  }
`;

const InDevText = styled.small`
  color: #f76f6f;
  margin: 0.25rem 0 0 0;
`;

const CurrentText = styled.small`
  font-weight: 400;
`;

const work = [
  {
    title: 'santdeleon.io',
    role: 'Creator',
    description: 'Official GitHub repository for santdeleon.io.',
    img: {
      src: Sant,
      alt: 'Sant',
      bgColor: '#FF8D8D',
    },
    href: 'https://github.com/santdeleon/santdeleon-io',
    isGithubLink: true,
  },
  {
    title: 'HostGator',
    role: 'Software Engineer',
    description: 'OG web hosting platform for small to medium size businesses.',
    img: {
      src: HostGator,
      alt: 'HostGator',
      bgColor: '#FFD192',
    },
    href: 'https://hostgator.com',
    isGithubLink: false,
  },
  {
    title: 'Coinflip',
    role: 'Creator',
    description:
      'Decentralized gaming application built on the Ethereum network.',
    img: {
      src: Ethereum,
      alt: 'A custom cartoon coin of the Ethereum Logo.',
      bgColor: '#FFE792',
    },
    href: 'https://github.com/santdeleon/coinflip',
    isGithubLink: true,
  },
  {
    title: 'Amoeba',
    role: 'Creator',
    description: 'React based component library and design system.',
    img: {
      src: Amoeba,
      alt: 'Amoeba',
      bgColor: '#A9EBA3',
    },
    href: 'https://github.com/santdeleon/amoeba',
    isGithubLink: true,
  },
  {
    title: 'amoeba.com',
    role: 'Creator',
    description: 'Official documentation site for Amoeba.',
    img: {
      src: AmoebaAndFriends,
      alt: 'Amoeba.com Homepage Banner',
      bgColor: '#A1E4F0',
    },
    href: 'https://github.com/santdeleon/amoeba-com',
    isGithubLink: true,
  },
  {
    title: (
      <>
        Phantom <CurrentText>(Current)</CurrentText>
      </>
    ),
    role: 'Front-end Developer',
    description: 'A crypto wallet reimagined for DeFi & NFTs.',
    img: {
      src: Phantom,
      alt: 'Phantom',
      bgColor: '#E5B4F2',
    },
    href: 'https://phantom.app/',
    isGithubLink: false,
  },
];

const Work = () => {
  const { theme } = useTheme();

  return (
    <StyledSection>
      <h3>Work</h3>
      <Grid xs={1} md={2} xl={3} gap="lg">
        {work.map(
          ({ title, role, description, img, href, isGithubLink }, idx) => (
            <GridItem key={idx} align="stretch" justify="stretch">
              <Link href={href}>
                <StyledCard>
                  <Row justify="space-between">
                    <StyledH4>{title}</StyledH4>
                    {isGithubLink && (
                      <img
                        src={theme === 'light' ? GithubLight : GithubDark}
                        alt="Github"
                        width={16}
                      />
                    )}
                  </Row>
                  <Row margin="0 0 1rem 0">
                    <small>{role}</small>
                  </Row>
                  <ImgContainer
                    justify="center"
                    margin="0 0 1rem 0"
                    bgColor={img.bgColor}
                  >
                    <img src={img.src} alt={img.alt} />
                  </ImgContainer>
                  <Col>
                    <p>{description}</p>
                    {title === 'amoeba.com' && (
                      <InDevText>Currently in development</InDevText>
                    )}
                  </Col>
                </StyledCard>
              </Link>
            </GridItem>
          ),
        )}
      </Grid>
    </StyledSection>
  );
};

export default Work;
