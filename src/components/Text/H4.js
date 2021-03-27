import styled from 'styled-components';

const H4 = styled.h4`
  font-size: var(--typography-size-600-rem);
  font-weight: ${({ fontWeight }) =>
    fontWeight
      ? `var(--typography-weight-${fontWeight})`
      : 'var(--typography-weight-bold)'};
  line-height: 'var(--typography-size-600-line-height)';
  margin: ${({ margin }) =>
    margin
      ? margin
      : 'var(--spacer-size-0-rem) var(--spacer-size-0-rem) var(--spacer-size-300-rem) var(--spacer-size-0-rem)'};
  color: ${({ theme, color }) => {
    if (color) return color;
    else {
      return theme.mode === 'dark'
        ? 'var(--color-neutral-100)'
        : 'var(--color-neutral-900)';
    }
  }};
`;

export default H4;
