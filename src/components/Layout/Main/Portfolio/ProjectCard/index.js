import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import { number, string, object } from 'prop-types';
import cx from 'classnames';
import { ThemeContext } from 'styled-components';

import { useTheme } from '../../../../../hooks/useTheme.js';

import './index.css';

const propTypes = {
  id: number.isRequired,
  href: string.isRequired,
  name: string.isRequired,
  img: object.isRequired,
  color: string.isRequired,
  industry: string.isRequired,
  role: string.isRequired,
  emoji: object.isRequired,
};

const ProjectCard = ({ id, name, href, img, color, industry, role, emoji }) => {
  const { theme } = useTheme();
  const { backgroundColor } = useContext(ThemeContext);

  return (
    <Col
      xs={12}
      md={6}
      lg={4}
      className={cx('ProjectCard mb-lg-0 px-2', {
        'mb-5': id !== 3,
      })}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cx('text-decoration-none', {
          'text-dark': theme === 'light',
          'text-light': theme === 'dark',
        })}
      >
        <div
          className={cx('ProjectCard__Div--card-wrapper p-3', {
            'shadow border border-dark': theme === 'dark',
          })}
          style={{ backgroundColor: backgroundColor }}
        >
          <h3 className="mb-0 text-truncate">{name}</h3>
          <Row noGutters>
            <Col xs={10}>
              <p className="ProjectCard__P text-truncate">{industry}</p>
            </Col>
            <Col xs={2}>
              <p className="text-right">{emoji}</p>
            </Col>
          </Row>

          <div
            className="d-flex justify-content-center rounded py-4"
            style={{ background: color }}
          >
            {img}
          </div>
          <Row className="mt-4">
            <Col>
              <p className="ProjectCard__P mb-0">Role</p>
              <p className="ProjectCard__P ProjectCard__P--gradient-text text-truncate">
                {role}
              </p>
            </Col>
          </Row>
        </div>
      </a>
    </Col>
  );
};

ProjectCard.propTypes = propTypes;
export default ProjectCard;
