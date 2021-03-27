import React from 'react';
import { func } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledModalClose = styled.button`
  cursor: pointer;
  font-size: var(--typography-size-300-rem);
  color: var(--color-neutral-700);
  &:hover {
    color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-neutral-600)'
        : 'var(--color-neutral-900)'};
  }
`;

const propTypes = { onClick: func.isRequired };

const ModalClose = ({ onClick }) => (
  <StyledModalClose
    type="button"
    as={FontAwesomeIcon}
    icon={faTimes}
    aria-label="Close"
    onClick={onClick}
  />
);

ModalClose.propTypes = propTypes;
export default ModalClose;
