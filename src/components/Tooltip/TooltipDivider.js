import styled from 'styled-components';

const TooltipDivider = styled.div`
  border-width: 0.125rem 0 0 0;
  border-style: solid;
  width: 100%;
  padding: var(--spacer-size-0-rem);
  border-color: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'var(--color-neutral-1100)'
      : 'var(--color-neutral-100)'};
`;

export default TooltipDivider;
