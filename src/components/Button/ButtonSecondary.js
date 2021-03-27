import styled from 'styled-components';

import ButtonBase from './ButtonBase';

const ButtonSecondary = styled(ButtonBase)`
  color: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'var(--color-neutral-100)'
      : 'var(--color-neutral-800)'};
  background-color: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'var(--color-neutral-900)'
      : 'var(--color-neutral-0)'};
  border-color: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'var(--color-neutral-1100)'
      : 'var(--color-neutral-200)'};
  box-shadow: ${({ theme }) =>
    theme.mode === 'dark'
      ? '0 0.125rem 0 0 var(--color-neutral-1100)'
      : '0 0.125rem 0 0 var(--color-neutral-200)'};
  &:hover {
    background-color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-neutral-1000)'
        : 'var(--color-neutral-200)'};
    border-color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-neutral-1100)'
        : 'var(--color-neutral-400)'};
    box-shadow: ${({ theme }) =>
      theme.mode === 'dark'
        ? '0 0.125rem 0 0 var(--color-neutral-1100)'
        : '0 0.125rem 0 0 var(--color-neutral-400)'};
  }
  &:active {
    background-color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-neutral-1000)'
        : 'var(--color-neutral-200)'};
    border-color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-neutral-1100)'
        : 'var(--color-neutral-400)'};
    box-shadow: ${({ theme }) =>
      theme.mode === 'dark'
        ? '0 0 0 0 var(--color-neutral-1100)'
        : '0 0 0 0 var(--color-neutral-400)'};
  }
`;

export default ButtonSecondary;
