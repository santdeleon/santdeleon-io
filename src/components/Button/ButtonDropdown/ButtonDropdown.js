import styled from 'styled-components';

import ButtonBase from '../ButtonBase';

const ButtonDropdown = styled(ButtonBase)`
  z-index: 2;
  font-size: var(--typography-size-300-rem);
  padding: ${({ padding }) => (padding ? padding : 'var(--spacer-size-0-rem)')};
  color: ${({ theme, active }) => {
    if (active === 'true') {
      return 'var(--color-pink-700)';
    } else {
      return theme.mode === 'dark'
        ? 'var(--color-neutral-100)'
        : 'var(--color-neutral-900)';
    }
  }};
  background-color: transparent;
  border: 0;
  box-shadow: none;
  &:hover {
    color: ${({ theme }) =>
      theme.mode === 'light'
        ? 'var(--color-neutral-1100)'
        : 'var(--color-neutral-0)'};
  }
  &:focus {
    outline: 0;
  }
  &:active {
    transform: translateY(0);
  }
  &:after {
    content: '';
    color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-neutral-100)'
        : 'var(--color-neutral-900)'};
  }
`;

export default ButtonDropdown;
