import React from 'react';
import { Row, Col } from 'react-bootstrap';
import cx from 'classnames';

import { useBrand, useTheme } from '../hooks';
import { Emoji } from '.';

const Footer = () => {
  const { theme } = useTheme();
  const { tech } = useBrand();
  const dateLastUpdated = 'April 11, 2021';

  return (
    <div
      className={cx('border-top mt-5', {
        'border-dark': theme === 'dark',
      })}
    >
      <Row className="mb-4">
        <Col>
          <small className="text-muted">
            Website last updated: {dateLastUpdated}
          </small>
        </Col>
      </Row>
      <h5>Languages</h5>
      <Row>
        <Col xs={12} lg={8}>
          <Row>
            {tech.map(({ name, languages }, idx) => (
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
              className="font-weight-bold text-decoration-none text-info"
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
