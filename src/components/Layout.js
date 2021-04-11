import React from 'react';
import { Container } from 'react-bootstrap';
import { oneOfType, array, func, object } from 'prop-types';

import { Header, Main, ScrollButton, Footer } from '.';

const propTypes = {
  children: oneOfType([func, object, array]).isRequired,
};

const Layout = ({ children }) => (
  <Container className="pt-4">
    <Header />
    <Main>{children}</Main>
    <ScrollButton />
    <Footer />
  </Container>
);

Layout.propTypes = propTypes;
export default Layout;
