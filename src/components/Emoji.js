import React from 'react';
import { string, func, object, array, oneOfType } from 'prop-types';
import styled from 'styled-components';

const StyledEmoji = styled.span`
  display: inline-block;
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && height};
  margin: ${({ margin }) => margin && margin};
`;

const propTypes = {
  alt: string.isRequired,
  ariaLabel: string.isRequired,
  children: oneOfType([string, func, object, array]).isRequired,
};

const Emoji = ({ alt, ariaLabel, children, ...props }) => (
  <StyledEmoji role="img" alt={alt} aria-label={ariaLabel} {...props}>
    {children}
  </StyledEmoji>
);

Emoji.propTypes = propTypes;
export default Emoji;
