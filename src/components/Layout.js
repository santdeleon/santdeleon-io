import React from 'react';
import { Container } from 'react-bootstrap';

import Header from './Header';
import Work from './Work';
import Languages from './Languages';
import Footer from './Footer';

const Layout = () => (
  <Container className="pt-4">
    <Header />
    <Work />
    <Languages />
    <Footer />
  </Container>
);

export default Layout;
