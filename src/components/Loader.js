import React from 'react';
import styled from 'styled-components';

const EllipsisContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
`;

const Ellipsis = styled.div`
  position: relative;
  width: var(--typography-size-200-rem);
  height: var(--typography-size-200-rem);
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'var(--color-neutral-100)'
      : 'var(--color-neutral-900)'};
  border-radius: 50%;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
  animation: ${({ id }) => id && `ellipsis-${id} .8s infinite`};
  @keyframes ellipsis-1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes ellipsis-2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(var(--spacer-size-500-rem), 0);
    }
  }
  @keyframes ellipsis-3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`;

const Loader = () => (
  <EllipsisContainer>
    <Ellipsis id={1} />
    <Ellipsis id={2} />
    <Ellipsis id={3} />
  </EllipsisContainer>
);

export default Loader;
