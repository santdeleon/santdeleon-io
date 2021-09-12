import React, { FC } from 'react';

import Container from './Container';
import Header from './Header';
import Work from './Work';
import Languages from './Languages';
import Footer from './Footer';

const Layout: FC = () => (
  <Container>
    <Header />
    <Work />
    <Languages />
    <Footer />
  </Container>
);

export default Layout;
