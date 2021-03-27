import styled from 'styled-components';

const ModalFooter = styled.div`
  padding: ${({ padding }) => (padding ? padding : '1rem')};
  margin: ${({ margin }) => margin && margin};
  background-color: ${({ theme, withBackground }) => {
    if (withBackground) {
      return theme.mode === 'dark'
        ? 'var(--color-neutral-1000)'
        : 'var(--color-neutral-100)';
    }
  }};
  border-top: ${({ theme, withBorder }) => {
    if (withBorder) {
      return theme.mode === 'dark'
        ? '2px solid var(--color-neutral-1100)'
        : ' 2px solid var(--color-neutral-200)';
    }
  }};
  border-radius: 0 0 0.5rem 0.5rem;
`;
export default ModalFooter;
