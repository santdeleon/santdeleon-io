import React from 'react';
import { oneOfType, string, func, object, array, bool } from 'prop-types';
import styled from 'styled-components';

import { ModalScreenReaderText } from '.';

const StyledModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ padding }) =>
    padding
      ? padding
      : 'var(--spacer-size-350-rem) var(--spacer-size-400-rem)'};
  border-bottom: ${({ theme, withBorder }) => {
    if (withBorder) {
      return theme.mode === 'dark'
        ? '2px solid var(--color-neutral-1100)'
        : ' 2px solid var(--color-neutral-200)';
    }
  }};
  border-radius: 0.5rem 0.5rem 0 0;
`;

const propTypes = {
  title: string.isRequired,
  withBorder: bool,
  children: oneOfType([string, object, array, func]),
};

const ModalHeader = ({ title, withBorder, children, ...props }) => (
  <StyledModalHeader withBorder={withBorder}>
    <ModalScreenReaderText title={title} />
    {children}
  </StyledModalHeader>
);

ModalHeader.propTypes = propTypes;
export default ModalHeader;
