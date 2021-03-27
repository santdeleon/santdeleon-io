import styled from 'styled-components';

import ButtonBase from './ButtonBase';

const ButtonDanger = styled(ButtonBase)`
  color: var(--color-neutral-0);
  background-color: var(--color-red-800);
  border-color: var(--color-red-900);
  box-shadow: 0 0.125rem 0 0 var(--color-red-900);
  &:hover {
    background-color: var(--color-red-900);
    border-color: var(--color-red-1000);
    box-shadow: 0 0.125rem 0 0 var(--color-red-1000);
  }
  &:active {
    background-color: var(--color-red-900);
    border-color: var(--color-red-1000);
    box-shadow: 0 0 0 0 var(--color-red-1000);
  }
`;

export default ButtonDanger;
