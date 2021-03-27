import styled from 'styled-components';

import Tooltip from './Tooltip';

const TooltipRight = styled(Tooltip)`
  top: -0.55rem;
  left: 100%;
  margin-left: var(--spacer-size-400-rem);
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -0.6875rem;
    bottom: 100%;
    border: 0.6875rem solid transparent;
    border-right-color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-neutral-1100)'
        : 'var(--color-neutral-200)'};
  }
  &:after {
    content: ' ';
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -0.5rem;
    border-width: 0.5rem;
    border-style: solid;
    border-color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'transparent var(--color-neutral-900) transparent transparent'
        : 'transparent var(--color-neutral-0) transparent transparent'};
  }
`;

export default TooltipRight;
