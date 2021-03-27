import styled from 'styled-components';

import ButtonBase from './ButtonBase';

const ButtonPrimary = styled(ButtonBase)`
  color: var(--color-neutral-0);
  background-color: var(--color-pink-700);
  border-color: var(--color-pink-900);
  box-shadow: 0 0.125rem 0 0 var(--color-pink-900);
  &:hover {
    background-color: var(--color-pink-900);
    border-color: var(--color-pink-1000);
    box-shadow: 0 0.125rem 0 0 var(--color-pink-1000);
  }
  &:active {
    background-color: var(--color-pink-900);
    border-color: var(--color-pink-1000);
    box-shadow: 0 0 0 0 var(--color-pink-1000);
  }
`;

export default ButtonPrimary;
