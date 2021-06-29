import React from 'react';
import cx from 'classnames';

import { useTheme } from '../theme';

import GithubLight from '../assets/img/github-light.svg';
import GithubDark from '../assets/img/github-dark.svg';
import HostGator from '../assets/img/hostgator.png';
import Ethereum from '../assets/img/ethereum.svg';
import Amoeba from '../assets/img/amoeba-dynamic.svg';
import AmoebaAndFriends from '../assets/img/amoeba-and-friends.svg';
import Phantom from '../assets/img/phantom.png';
import Sant from '../assets/img/sant.svg';

const Work = () => {
  const { theme } = useTheme();

  const work = [
    {
      title: 'santdeleon.io',
      role: 'Creator',
      description: 'GitHub repository for santdeleon.io',
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
      description: 'OG Web hosting platform.',
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
      description: 'Decentralized application built on Ethereum.',
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
      description: 'React based component library.',
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
          Phantom <small className="text-muted">(Current)</small>
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

  return (
    <section className="my-5">
      <h5>Work</h5>
      {/* <Row>
        {work.map(
          ({ title, role, description, img, href, isGithubLink }, idx) => (
            <Col
              as="a"
              md={6}
              xl={4}
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={cx('text-decoration-none', {
                'text-dark': theme === 'light',
                'text-light': theme === 'dark',
              })}
            >
              <div
                className={cx('p-3 border mb-5 rounded', {
                  'border-light shadow-sm': theme === 'light',
                  'border-0 shadow-lg': theme === 'dark',
                })}
              >
                <Row>
                  <Col className="d-flex justify-content-between">
                    <h6 className="mb-0">{title}</h6>
                    {isGithubLink && (
                      <img
                        src={theme === 'light' ? GithubLight : GithubDark}
                        alt="Github"
                        width={10}
                      />
                    )}
                  </Col>
                </Row>
                <small className="text-muted">{role}</small>
                <div
                  className="d-flex justify-content-center rounded py-3 my-4"
                  style={{ background: img.bgColor, height: '150px' }}
                >
                  <img src={img.src} alt={img.alt} className="img-fluid" />
                </div>
                <p className="text-muted">{description}</p>
                {title === 'amoeba.com' && (
                  <small className="text-red">Currently in development</small>
                )}
              </div>
            </Col>
          ),
        )}
      </Row> */}
    </section>
  );
};

export default Work;
