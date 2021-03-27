import styled from 'styled-components';

import ButtonBase from './ButtonBase';

const ButtonSuccess = styled(ButtonBase)`
  color: var(--color-neutral-0);
  background-color: var(--color-green-700);
  border-color: var(--color-green-800);
  box-shadow: 0 0.125rem 0 0 var(--color-green-800);
  &:hover {
    background-color: var(--color-green-800);
    border-color: var(--color-green-900);
    box-shadow: 0 0.125rem 0 0 var(--color-green-900);
  }
  &:active {
    background-color: var(--color-green-800);
    border-color: var(--color-green-900);
    box-shadow: 0 0 0 0 var(--color-green-900);
  }
`;

export default ButtonSuccess;
