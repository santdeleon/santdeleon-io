import React from 'react';
import { Container } from 'react-bootstrap';
import { oneOfType, array, func, object } from 'prop-types';

import { Header, Main, Footer } from '.';

const propTypes = {
  children: oneOfType([func, object, array]).isRequired,
};

const Layout = ({ children }) => (
  <Container>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Container>
);

Layout.propTypes = propTypes;
export default Layout;
