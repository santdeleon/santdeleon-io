import styled from 'styled-components';

const ModalContent = styled.div`
  z-index: 3;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'var(--color-neutral-900)'
      : 'var(--color-neutral-0)'};
  border-radius: 0.5rem;
  border-style: solid;
  border-width: 2px;
  border-color: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'var(--color-neutral-1100)'
      : 'var(--color-neutral-200)'};
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.1),
    0 0.375rem 1.25rem 0 rgba(0, 0, 0, 0.1);
  animation-name: animatetop;
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.4, 1, 0.5, 1);
  width: ${({ width }) => (width ? width : '28.125rem')};
  min-height: 100%;
  transform: perspective(200px) translateY(0);
  @media only screen and (max-width: 576px) {
    width: 25rem;
  }
  @keyframes animatetop {
    from {
      top: -10vh;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
`;

export default ModalContent;
