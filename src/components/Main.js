import React from 'react';
import { oneOfType, array, object, func } from 'prop-types';

const propTypes = {
  children: oneOfType([array, object, func]).isRequired,
};

const Main = ({ children, ...props }) => (
  <main aria-label="Main" {...props}>
    {children}
  </main>
);

Main.propTypes = propTypes;
export default Main;
