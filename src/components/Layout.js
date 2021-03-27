import React from 'react';
import { oneOfType, array, func, object } from 'prop-types';

import { Container, Header, Main, Footer } from '.';

const propTypes = {
  children: oneOfType([func, object, array]).isRequired,
};

const Layout = ({ children }) => (
  <Container className="px-md-8" fluid>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Container>
);

Layout.propTypes = propTypes;
export default Layout;
