import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLink = styled(Link)`
  margin: ${({ margin }) =>
    margin ? margin : 'var(--spacer-size-0-rem) var(--spacer-size-350-rem)'};
  font-size: var(--typography-size-300-rem);
  font-weight: var(--typography-weight-bold);
  text-decoration: none;
  color: ${({ theme, disabled, active }) => {
    if (active === 'true') return 'var(--color-pink-700)';
    if (disabled) {
      return theme.mode === 'light'
        ? 'rgba(0, 0, 0, 0.2)'
        : 'rgba(300, 300, 300, 0.3)';
    } else {
      return theme.mode === 'dark'
        ? 'var(--color-neutral-600)'
        : 'var(--color-neutral-700)';
    }
  }};
  transition: color 0.2s ease-out;
  &:hover {
    color: ${({ theme, active }) => {
      if (theme.mode === 'light') {
        return active === 'true'
          ? 'var(--color-pink-700)'
          : 'var(--color-neutral-900)';
      } else {
        return active === 'true'
          ? 'var(--color-pink-700)'
          : 'var(--color-neutral-100)';
      }
    }}
`;

export default NavLink;
