import styled from 'styled-components';

import ButtonBase from './ButtonBase';

const ButtonTransparent = styled(ButtonBase)`
  color: ${({ theme }) =>
    theme.mode === 'dark' ? 'transparent' : 'var(--color-neutral-900)'};
  -webkit-background-clip: text !important;
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'linear-gradient(to right,#e92b2b, #ff9600, #ffc800, #6adb55, #50cce2, #bc3ede, #ff4dd3)'
      : 'transparent'};
  border-color: transparent;
  border-width: 0.125rem;
  box-shadow: none;
  &:hover {
    color: ${({ theme }) =>
      theme.mode === 'dark' ? 'transparent' : 'var(--color-neutral-1100)'};
    background: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'linear-gradient(to right,#e92b2b, #ff9600, #ffc800, #6adb55, #50cce2, #bc3ede, #ff4dd3)'
        : 'transparent'};
    border-color: transparent;
  }
  &:active {
    color: ${({ theme }) =>
      theme.mode === 'dark' ? 'transparent' : 'var(--color-neutral-900)'};
    background: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'linear-gradient(to right,#e92b2b, #ff9600, #ffc800, #6adb55, #50cce2, #bc3ede, #ff4dd3)'
        : 'transparent'};
    border-color: transparent;
    border-width: 0.125rem;
    transform: translateY(0);
  }
  &:focus(:not&:active) {
    background: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'linear-gradient(to right,#e92b2b, #ff9600, #ffc800, #6adb55, #50cce2, #bc3ede, #ff4dd3)'
        : 'transparent'};
  }
  &:focus {
    color: ${({ theme }) =>
      theme.mode === 'dark' ? 'transparent' : 'var(--color-neutral-900)'};
    border-color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-neutral-1100)'
        : 'var(--color-neutral-300)'};
    border-width: 0.125rem;
  }
`;

export default ButtonTransparent;
