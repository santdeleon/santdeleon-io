import styled from 'styled-components';

import Tooltip from './Tooltip';

const TooltipLeft = styled(Tooltip)`
  top: -0.55rem;
  right: 100%;
  margin-right: var(--spacer-size-400-rem);
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 100%;
    margin-top: -0.6875rem;
    bottom: 100%;
    border: 0.6875rem solid transparent;
    border-left-color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-neutral-1100)'
        : 'var(--color-neutral-200)'};
  }
  &:after {
    content: ' ';
    position: absolute;
    top: 50%;
    left: 100%;
    margin-top: -0.5rem;
    border-width: 0.5rem;
    border-style: solid;
    border-color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'transparent transparent transparent var(--color-neutral-900)'
        : 'transparent transparent transparent var(--color-neutral-0)'};
  }
`;

export default TooltipLeft;
