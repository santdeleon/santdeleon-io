import React, { useEffect } from 'react';
import useAxios from 'axios-hooks';
import moment from 'moment';
import styled from 'styled-components';

import { URL_SANTDELEONIO_GITHUB_API, URL_CONTACT } from '../constants';

import { Emoji } from './Emoji';
import { Row } from './Row';
import { Grid } from './Grid';
import { GridItem } from './GridItem';
import { Link } from './Link';

const StyledSection = styled.section`
  border-width: 2px 0 0 0;
  border-style: solid;
  border-color: ${({ theme }) =>
    theme.mode === 'dark' ? '#302f2f' : '#f4f2f2'};
  padding-top: 1rem;
`;

const ListItemHeader = styled.li`
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#f4f2f2' : '#302f2f')};
`;

const languages = [
  {
    name: 'Frontend',
    languages: [
      'HTML',
      'CSS/SCSS',
      'JavaScript/TypeScript',
      'React',
      'NodeJS',
      'jQuery',
      'KnockoutJS',
      'styled-components',
      'Jest',
      'React Testing Library',
      'Mocha',
      'Chai',
      'Bootstrap',
      'Storybook',
    ],
  },
  {
    name: 'Blockchain',
    languages: [
      'Solidity',
      'Web3',
      '@web3/react',
      'EthersJS',
      '@ethersproject',
      'OpenZepplin',
      'Ganache',
      'Truffle Suite',
      'Ethereum Testnets',
      'Solana Testnets',
      'Ethereum/Solana Development',
    ],
  },
  {
    name: 'Backend',
    languages: ['Java', 'Perl'],
  },
];

const Footer = () => {
  const [
    { data, loading, error },
    refetchRepoData,
  ] = useAxios(URL_SANTDELEONIO_GITHUB_API, { manual: true });

  useEffect(() => {
    if (!data) refetchRepoData();
  }, [data, refetchRepoData]);

  return (
    <StyledSection>
      <Row margin="0 0 1rem 0">
        <small>
          Website last updated:{' '}
          <span>
            {loading && 'XXXX XX, XXXX'}
            {data && moment(data.updated_at).format('MMMM Do, YYYY')}
            {error && <>Hmm.. Looks like we&apos;re not sure.</>}
          </span>
        </small>
      </Row>
      <h3>Languages</h3>
      <Grid xs={1} sm={2} md={4} gap="md">
        {languages.map(({ name, languages }, idx) => (
          <GridItem key={idx}>
            <ul>
              <ListItemHeader>{name}</ListItemHeader>
              {languages.map((language, i) => (
                <li key={i}>{language}</li>
              ))}
            </ul>
          </GridItem>
        ))}
        <GridItem>
          <ul>
            <li>
              Give me a shout{' '}
              <Link href={URL_CONTACT} title="Contact Me">
                <b>sant@santdeleon.io</b>
              </Link>
            </li>
            <li>
              Let&apos;s get <span>coffee</span>{' '}
              <Emoji ariaLabel="Coffee Emoji">☕</Emoji>
            </li>
          </ul>
        </GridItem>
      </Grid>
    </StyledSection>
  );
};

export default Footer;
