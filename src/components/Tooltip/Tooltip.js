import React from 'react';
import { string, array, object, oneOfType, func } from 'prop-types';
import styled from 'styled-components';

const TooltipBase = styled.span`
  visibility: hidden;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 1;
  outline: 0;
  width: ${({ width }) => (width ? width : '10rem')};
  padding: var(--spacer-size-400-rem);
  font-weight: var(--typography-weight-medium);
  color: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'var(--color-neutral-100)'
      : 'var(--color-neutral-900)'};
  background-color: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'var(--color-neutral-900)'
      : 'var(--color-neutral-0)'};
  border: 0.125rem solid
    ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-neutral-1100)'
        : 'var(--color-neutral-200)'};
  border-radius: 0.5rem;
`;

const propTypes = {
  ariaLabel: string.isRequired,
  children: oneOfType([array, object, string, func]),
};

const Tooltip = ({ ariaLabel, children, ...props }) => (
  <TooltipBase tabIndex="-1" aria-label={ariaLabel} {...props}>
    {children}
  </TooltipBase>
);

Tooltip.propTypes = propTypes;
export default Tooltip;
