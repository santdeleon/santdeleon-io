import React from 'react';
import { string, oneOfType, node, array } from 'prop-types';

const propTypes = {
  ariaLabel: string.isRequired,
  children: oneOfType([string, array, node]).isRequired,
};

const Emoji = ({ ariaLabel, children, ...props }) => (
  <span role="img" aria-label={ariaLabel} {...props}>
    {children}
  </span>
);

Emoji.propTypes = propTypes;
export default Emoji;
