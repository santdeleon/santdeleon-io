import React, { FC } from 'react';
import styled from 'styled-components';

import { useTheme } from '../theme';

import { Grid } from './Grid';
import { GridItem } from './GridItem';
import { Row } from './Row';
import { Col } from './Col';
import { Link } from './Link';
import { Text } from './Text';

import GithubLight from '../assets/img/github-light.svg';
import GithubDark from '../assets/img/github-dark.svg';
import HostGator from '../assets/img/hostgator.png';
import Ethereum from '../assets/img/ethereum.svg';
import Amoeba from '../assets/img/amoeba-dynamic.svg';
import AmoebaAndFriends from '../assets/img/amoeba-and-friends.svg';
import Phantom from '../assets/img/phantom.png';
import Sant from '../assets/img/sant.svg';

import { URL_PHANTOM, URL_COINFLIP, URL_HOSTGATOR, URL_SANTDELEON_IO_GITHUB } from '../constants';

const StyledSection = styled.section`
  margin-bottom: 4rem;
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding: 1.25rem;
  box-shadow: ${({ theme }) =>
    theme.mode === 'dark' ? '0 7px 7px rgba(0, 0, 0, 0.6)' : '0 7px 7px rgba(0, 0, 0, 0.2)'};
  background-color: ${({ theme }) => (theme.mode === 'dark' ? '#222222' : '#FFFFFF')};
  transform: scale(1);
  transition: transform 0.2s ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;

const ImgContainer = styled(Row)<{ bgColor?: string }>`
  padding: 1rem 0;
  height: 150px;
  background-color: ${({ bgColor }) => bgColor};
  img {
    height: 80%;
  }
`;

const CurrentText = styled.small`
  color: #8a81f8;
  font-weight: 500;
`;

const work = [
  {
    title: 'Portfolio',
    role: 'Creator',
    description: 'Official GitHub repository for santdeleon.io.',
    img: {
      src: Sant,
      alt: 'Sant',
      bgColor: '#FF8D8D',
    },
    href: URL_SANTDELEON_IO_GITHUB,
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
    href: URL_HOSTGATOR,
    isGithubLink: false,
  },
  {
    title: 'Coinflip',
    role: 'Creator',
    description: 'Decentralized gaming application built on the Ethereum network.',
    img: {
      src: Ethereum,
      alt: 'Ethereum Coin',
      bgColor: '#FFE792',
    },
    href: URL_COINFLIP,
    isGithubLink: true,
  },
  {
    title: 'Amoeba Library',
    role: 'Creator',
    description: 'React based component library and design system.',
    img: {
      src: Amoeba,
      alt: 'Amoeba',
      bgColor: '#A9EBA3',
    },
    href: undefined,
    isGithubLink: false,
  },
  {
    title: 'Amoeba',
    role: 'Creator',
    description: 'Amoeba documentation site.',
    img: {
      src: AmoebaAndFriends,
      alt: 'Amoeba and Friends',
      bgColor: '#A1E4F0',
    },
    href: undefined,
    isGithubLink: false,
    isInDev: true,
  },
  {
    title: (
      <>
        Phantom <CurrentText>(Current)</CurrentText>
      </>
    ),
    role: 'Software Engineer',
    description: 'A crypto wallet re-imagined for DeFi & NFTs.',
    img: {
      src: Phantom,
      alt: 'Phantom',
      bgColor: '#E5B4F2',
    },
    href: URL_PHANTOM,
    isGithubLink: false,
  },
];

const Work: FC = () => {
  const { theme } = useTheme();

  return (
    <StyledSection>
      <h3>Work</h3>
      <Grid xs={1} md={2} xl={3} gap="lg">
        {work.map(({ title, role, description, img, href, isGithubLink, isInDev }, idx) => (
          <GridItem key={idx} align="stretch" justify="stretch">
            <Link href={href}>
              <StyledCard>
                <Row justify="space-between">
                  <Text color={theme === 'dark' ? '#F3F2F2' : '#333232'} margin="0 0 0.25rem 0">
                    {title}
                  </Text>
                  {isGithubLink && <img src={theme === 'light' ? GithubLight : GithubDark} alt="Github" width={16} />}
                </Row>
                <Row margin="0 0 1rem 0">
                  <Text fontSize="0.9rem" color={theme === 'dark' ? '#A8A6A6' : '#7777777'}>
                    {role}
                  </Text>
                </Row>
                <ImgContainer justify="center" margin="0 0 1rem 0" bgColor={img.bgColor}>
                  <img src={img.src} alt={img.alt} />
                </ImgContainer>
                <Col>
                  <p>{description}</p>
                  {isInDev && (
                    <Text color="#f76f6f" fontSize="0.825rem" margin="0.25rem 0 0 0">
                      Currently in development
                    </Text>
                  )}
                </Col>
              </StyledCard>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </StyledSection>
  );
};

export default Work;
