import styled from 'styled-components';

import Tooltip from './Tooltip';

const TooltipBottom = styled(Tooltip)`
  top: 100%;
  left: 50%;
  margin-top: var(--spacer-size-400-rem);
  transform: translateX(-50%);
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
    content: ' ';
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -0.5rem;
    border-width: 0.5rem;
    border-style: solid;
    border-color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'transparent transparent var(--color-neutral-900) transparent'
        : 'transparent transparent var(--color-neutral-0) transparent'};
  }
`;

export default TooltipBottom;
