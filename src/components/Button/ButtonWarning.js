import styled from 'styled-components';

import ButtonBase from './ButtonBase';

const ButtonWarning = styled(ButtonBase)`
  color: var(--color-neutral-900);
  background-color: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'var(--color-yellow-600)'
      : 'var(--color-yellow-400)'};
  border-color: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'var(--color-yellow-700)'
      : 'var(--color-yellow-600)'};
  box-shadow: ${({ theme }) =>
    theme.mode === 'dark'
      ? '0 0.125rem 0 0 var(--color-yellow-700)'
      : '0 0.125rem 0 0 var(--color-yellow-600)'};
  &:hover {
    color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-neutral-0)'
        : 'var(--color-neutral-900)'};
    background-color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-yellow-700)'
        : 'var(--color-yellow-600)'};
    border-color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-yellow-800)'
        : 'var(--color-yellow-700)'};
    box-shadow: ${({ theme }) =>
      theme.mode === 'dark'
        ? '0 0.125rem 0 0 var(--color-yellow-800)'
        : '0 0.125rem 0 0 var(--color-yellow-700)'};
  }
  &:active {
    color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-neutral-0)'
        : 'var(--color-neutral-900)'};
    background-color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-yellow-700)'
        : 'var(--color-yellow-600)'};
    border-color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-yellow-800)'
        : 'var(--color-yellow-700)'};
    box-shadow: ${({ theme }) =>
      theme.mode === 'dark'
        ? '0 0 0 0 var(--color-yellow-800)'
        : '0 0 0 0 var(--color-yellow-700)'};
  }
`;

export default ButtonWarning;
