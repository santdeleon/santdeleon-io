import React from 'react';
import { Row, Col } from 'react-bootstrap';
import cx from 'classnames';

import { useBrand, useTheme } from '../hooks';

import GithubLight from '../assets/img/github-light.svg';
import GithubDark from '../assets/img/github-dark.svg';

const Work = () => {
  const { work } = useBrand();
  const { theme } = useTheme();

  return (
    <section className="my-5">
      <h5>Work</h5>
      <Row>
        {work.map(
          (
            { title, role, description, img, imgBgColor, href, isGithubLink },
            idx,
          ) => (
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
                {title === 'Liquidrainbowpony.com' && (
                  <small className="text-red">Currently in development</small>
                )}
              </div>
            </Col>
          ),
        )}
      </Row>
    </section>
  );
};

export default Work;
