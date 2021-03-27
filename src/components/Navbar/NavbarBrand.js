import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarBrand = styled(Link)`
  display: flex;
  font-size: var(--typography-size-700-rem);
  font-weight: var(--typography-weight-bold);
  text-decoration: none;
  color: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'var(--color-neutral-0)'
      : 'var(--color-neutral-900)'};
`;

export default NavbarBrand;
