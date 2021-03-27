import React, { createRef } from 'react';
import { oneOfType, string, func, object, array, bool } from 'prop-types';
import styled from 'styled-components';
import { useOnClickOutside } from '../../../hooks';

const StyledButtonDropdownMenu = styled.div`
  outline: 0;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: var(--spacer-size-400-rem);
  flex-direction: column;
  text-align: ${({ align }) => (align ? align : 'center')};
  width: ${({ width }) => (width ? width : '12rem')};
  color: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'var(--color-neutral-100)'
      : 'var(--color-neutral-900)'};
  background-color: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'var(--color-neutral-900)'
      : 'var(--color-neutral-0)'};
  border: 2px solid
    ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-neutral-1100)'
        : 'var(--color-neutral-200)'};
  border-radius: 0.5rem;
  &:before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -0.6875rem;
    border: 0.6875rem solid transparent;
    border-bottom-color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-neutral-1100)'
        : 'var(--color-neutral-200)'};
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -0.5rem;
    border-width: 0.5rem;
    border-style: solid;
    border-color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'transparent transparent var(--color-neutral-900) transparent'
        : 'transparent transparent  var(--color-neutral-0) transparent'};
  }
`;

const propTypes = {
  id: string.isRequired,
  show: bool.isRequired,
  setShow: func.isRequired,
  ariaDescribedBy: string,
  ariaLabel: string,
  children: oneOfType([string, object, array, func]),
};

const ButtonDropdownMenu = ({
  id,
  show,
  setShow,
  ariaDescribedBy,
  ariaLabel,
  children,
  ...props
}) => {
  const ref = createRef();
  useOnClickOutside(ref, () => setShow(false));

  if (!show) return null;

  return (
    <StyledButtonDropdownMenu
      ref={ref}
      show={show}
      id={id}
      tabindex={show ? '0' : '-1'}
      aria-hidden={!show}
      aria-describedby={ariaDescribedBy}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </StyledButtonDropdownMenu>
  );
};

ButtonDropdownMenu.propTypes = propTypes;
export default ButtonDropdownMenu;
