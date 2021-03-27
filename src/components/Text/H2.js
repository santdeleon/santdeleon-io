import styled from 'styled-components';

const H2 = styled.h2`
  font-size: var(--typography-size-700-rem);
  ${({ theme, fluid }) => theme.media.greaterThan('xxs')`
    font-size: var(--typography-size-800-rem);
  `}
  font-weight: ${({ fontWeight }) =>
    fontWeight
      ? `var(--typography-weight-${fontWeight})`
      : 'var(--typography-weight-bold)'};
  line-height: 'var(--typography-size-800-line-height)';
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

export default H2;
