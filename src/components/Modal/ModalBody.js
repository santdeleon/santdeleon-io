import styled from 'styled-components';

const ModalBody = styled.div`
  padding: ${({ padding }) =>
    padding ? padding : 'var(--spacer-size-400-rem)'};
  margin: ${({ margin }) => margin && margin};
  background-color: ${({ theme, withBackground }) => {
    if (withBackground) {
      return theme.mode === 'dark'
        ? 'var(--color-neutral-1000)'
        : 'var(--color-neutral-100)';
    }
  }};
`;

export default ModalBody;
