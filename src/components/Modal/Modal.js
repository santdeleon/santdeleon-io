import React from 'react';
import { oneOfType, string, func, object, array, bool } from 'prop-types';
import styled from 'styled-components';

import { ModalOverlay } from '.';

const StyledModal = styled.div`
  z-index: 3;
  position: fixed;
  top: var(--spacer-size-0-rem);
  right: var(--spacer-size-0-rem);
  bottom: var(--spacer-size-0-rem);
  left: var(--spacer-size-0-rem);
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-box-pack: center;
`;

const propTypes = {
  id: string.isRequired,
  show: bool.isRequired,
  ariaDescribedBy: string,
  ariaLabel: string,
  onHide: func.isRequired,
  children: oneOfType([string, object, array, func]),
};

const Modal = ({
  id,
  show,
  ariaDescribedBy,
  ariaLabel,
  onHide,
  children,
  ...props
}) => {
  if (!show) return null;

  return (
    <StyledModal
      role="dialog"
      show={show}
      id={id}
      tabindex={show ? '0' : '-1'}
      aria-hidden={!show}
      aria-describedby={ariaDescribedBy}
      aria-label={ariaLabel}
      {...props}
    >
      <ModalOverlay onHide={onHide} />
      {children}
    </StyledModal>
  );
};

Modal.propTypes = propTypes;
export default Modal;
