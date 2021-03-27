import styled from 'styled-components';

const Small = styled.small`
  font-size: var(--typography-size-100-rem);
  font-weight: ${({ fontWeight }) =>
    fontWeight
      ? `var(--typography-weight-${fontWeight})`
      : 'var(--typography-weight-regular)'};
  line-height: 'var(--typography-size-100-line-height)';
  margin: ${({ margin }) =>
    margin
      ? margin
      : 'var(--spacer-size-0-rem) var(--spacer-size-0-rem) var(--spacer-size-300-rem) var(--spacer-size-0-rem)'};
  color: ${({ theme, color }) => {
    if (color) return color;
    else {
      return theme.mode === 'dark'
        ? 'var(--color-neutral-600)'
        : 'var(--color-neutral-700)';
    }
  }};
`;

export default Small;
