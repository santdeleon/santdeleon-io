import React from 'react';
import { oneOfType, array, node, string } from 'prop-types';

const propTypes = {
  children: oneOfType([array, node, string]).isRequired,
};

const Main = ({ children, ...props }) => <main {...props}>{children}</main>;

Main.propTypes = propTypes;
export default Main;
