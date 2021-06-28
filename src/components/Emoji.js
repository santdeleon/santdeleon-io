import React from 'react';
import { string, oneOfType, node, arrayOf } from 'prop-types';

const propTypes = {
  ariaLabel: string.isRequired,
  children: oneOfType([arrayOf(node), node]).isRequired,
};

const Emoji = ({ ariaLabel, children, ...props }) => (
  <span role="img" aria-label={ariaLabel} {...props}>
    {children}
  </span>
);

Emoji.propTypes = propTypes;
export default Emoji;
