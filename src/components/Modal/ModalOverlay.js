import React from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';

const StyledModalOverlay = styled.div`
  position: fixed;
  top: var(--spacer-size-0-rem);
  right: var(--spacer-size-0-rem);
  bottom: var(--spacer-size-0-rem);
  left: var(--spacer-size-0-rem);
  background-color: var(--color-neutral-1100);
  opacity: ${({ theme }) => (theme.mode === 'dark' ? '90%' : '40%')};
`;

const propTypes = { onHide: func };

const ModalOverlay = ({ onHide }) => <StyledModalOverlay onClick={onHide} />;

ModalOverlay.propTypes = propTypes;
export default ModalOverlay;
