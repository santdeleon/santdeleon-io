import React from 'react';
import { oneOfType, string, object, array, func } from 'prop-types';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  align-items: ${({ align }) => (align ? align : 'center')};
  justify-content: ${({ justify }) => (justify ? justify : 'flex-start')};
  padding: ${({ padding }) => padding && padding};
  margin: ${({ margin }) => margin && margin};
`;

const propTypes = {
  children: oneOfType([string, object, array, func]),
};

const Nav = ({ children, ...props }) => (
  <StyledNav role="navigation" {...props}>
    {children}
  </StyledNav>
);

Nav.propTypes = propTypes;
export default Nav;
