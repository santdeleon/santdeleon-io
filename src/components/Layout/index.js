import React from "react";
import { func, string } from "prop-types";

import NavMenu from "./NavMenu";
import Header from "./Header";
import Main from "./Main";

const propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
};

const Layout = ({ theme, toggleTheme }) => (
  <>
    <NavMenu theme={theme} toggleTheme={toggleTheme} />
    <Header theme={theme} />
    {/* <Main theme={theme} /> */}
  </>
);

Layout.propTypes = propTypes;
export default Layout;
