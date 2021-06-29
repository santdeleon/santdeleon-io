import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Work from './Work';
import Languages from './Languages';
import Footer from './Footer';

const Container = styled.div`
  max-width: 1040px;
  padding: 0 2rem;
  margin: 0 auto;
`;

const Layout = () => (
  <Container>
    <Header />
    <Work />
    <Languages />
    <Footer />
  </Container>
);

export default Layout;
