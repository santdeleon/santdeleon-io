import styled from 'styled-components';

const Navbar = styled.header`
  display: flex;
  align-items: ${({ align }) => (align ? align : 'center')};
  justify-content: ${({ justify }) => (justify ? justify : 'flex-start')};
  padding: ${({ padding }) =>
    padding ? padding : 'var(--spacer-size-400-rem) var(--spacer-size-0-rem)'};
  margin: ${({ margin }) => margin && margin};
  position: ${({ fixed, sticky }) => {
    if (fixed && fixed !== 'none') return 'fixed';
    if (sticky && sticky !== 'none') return 'sticky';
  }};
  top: ${({ fixed, sticky }) => {
    if (fixed && fixed === 'top') return 'var(--spacer-size-0-rem)';
    if (sticky && sticky === 'top') return 'var(--spacer-size-0-rem)';
  }};
  bottom: ${({ fixed, sticky }) => {
    if (fixed && fixed === 'bottom') return 'var(--spacer-size-0-rem)';
    if (sticky && sticky === 'bottom') return 'var(--spacer-size-0-rem)';
  }};
`;

export default Navbar;
