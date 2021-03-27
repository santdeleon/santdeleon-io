import React from 'react';
import { oneOfType, string, object, array, func } from 'prop-types';

const propTypes = {
  children: oneOfType([string, object, array, func]),
};

const ModalDialog = ({ children, ...props }) => (
  <div role="document" {...props}>
    {children}
  </div>
);

ModalDialog.propTypes = propTypes;
export default ModalDialog;
