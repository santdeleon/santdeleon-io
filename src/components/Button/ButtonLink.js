import styled from 'styled-components';

import ButtonBase from './ButtonBase';

const ButtonLink = styled(ButtonBase)`
  color: var(--color-neutral-0);
  background-color: var(--color-blue-700);
  border-color: var(--color-blue-800);
  box-shadow: 0 0.125rem 0 0 var(--color-blue-800);
  &:hover {
    background-color: var(--color-blue-800);
    border-color: var(--color-blue-900);
    box-shadow: 0 0.125rem 0 0 var(--color-blue-900);
  }
  &:active {
    background-color: var(--color-blue-800);
    border-color: var(--color-blue-900);
    box-shadow: 0 0 0 0 var(--color-blue-900);
  }
`;

export default ButtonLink;
