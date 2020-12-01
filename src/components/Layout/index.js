import React from "react";
import { Container } from "react-bootstrap";

import NavMenu from "./NavMenu";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <NavMenu />
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
