import styled from 'styled-components';

const PLead = styled.p`
  font-size: var(--typography-size-300-rem);
  font-weight: ${({ fontWeight }) =>
    fontWeight
      ? `var(--typography-weight-${fontWeight})`
      : 'var(--typography-weight-regular)'};
  line-height: 1.4; /* TODO: Update Line Height in Design System*/
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

export default PLead;
