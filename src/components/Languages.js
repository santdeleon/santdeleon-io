import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import cx from 'classnames';
import useAxios from 'axios-hooks';
import moment from 'moment';

import { useTheme } from '../theme';

import { URL_SANTDELEONIO_GITHUB_API } from '../constants';

import Emoji from './Emoji';

const Footer = () => {
  const { theme } = useTheme();
  // Ping GitHub for santdeleon-io repo data
  const [
    { data, loading, error },
    refetchRepoData,
  ] = useAxios(URL_SANTDELEONIO_GITHUB_API, { manual: true });

  const languages = [
    {
      name: 'Frontend',
      languages: [
        'HTML',
        'CSS/SCSS',
        'JavaScript',
        'TypeScript',
        'React',
        'NodeJS',
        'jQuery',
        'KnockoutJS',
        'styled-components',
      ],
    },
    {
      name: 'Frontend',
      languages: [
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
      ],
    },
    {
      name: 'Backend',
      languages: ['Java', 'Perl'],
    },
  ];

  useEffect(() => {
    if (!data) refetchRepoData();
  }, [data, refetchRepoData]);

  return (
    <div
      className={cx('border-top', {
        'border-dark': theme === 'dark',
      })}
    >
      <Row className="mb-4">
        <Col className="pt-2">
          <small className="text-muted">
            Website last updated:{' '}
            <span
              className={cx({
                'text-info': !error,
                'text-danger': error,
              })}
            >
              {loading && 'XXXX XX, XXXX'}
              {data && moment(data.updated_at).format('MMMM Do, YYYY')}
              {error && <>Hmm.. Looks like we&apos;re not sure.</>}
            </span>
          </small>
        </Col>
      </Row>
      <h5>Languages</h5>
      <Row>
        <Col xs={12} lg={8}>
          <Row>
            {languages.map(({ name, languages }, idx) => (
              <Col key={idx} xs={12} sm={3}>
                <ul className="p-0">
                  <li className="font-weight-bold">
                    {idx === 1 ? <span>&nbsp;</span> : name}
                  </li>
                  {languages.map((language, i) => (
                    <li key={i} className="mb-1 text-muted">
                      {language}
                    </li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={12} lg={4} className="text-left text-lg-right">
          <p className="mb-0 font-weight-light text-muted">
            Give me a shout{' '}
            <a
              href="mailto:sant@santdeleon.io"
              className="font-weight-bold text-decoration-none text-pink"
              title="Contact Sant"
              aria-label="Contact Sant"
            >
              sant@santdeleon.io
            </a>
          </p>
          <p className="font-weight-light text-muted">
            Let&apos;s get{' '}
            <span
              className={cx('font-weight-bold', {
                'text-dark': theme === 'light',
                'text-light': theme === 'dark',
              })}
            >
              coffee
            </span>{' '}
            <Emoji ariaLabel="Coffee Emoji">☕</Emoji>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
