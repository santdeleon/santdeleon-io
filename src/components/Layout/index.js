import React, { useEffect } from "react";
import { func, string, object } from "prop-types";

import NavMenu from "./NavMenu";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import Portfolio from "./Main/Portfolio";
// import Tech from "./Main/Tech";
// import PreFooter from "./Main/PreFooter";
// import Footer from "./Footer";

const propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
  socialIcons: object.isRequired,
  github: object.isRequired,
  heart: object.isRequired,
  copyright: object.isRequired,
  particles: object.isRequired
};

const defaultProps = {
  theme: "light",
  toggleTheme: () => {},
  socialIcons: {},
  github: {},
  heart: {},
  copyright: {},
  particles: {}
};

const Layout = ({
  theme,
  toggleTheme,
  socialIcons,
  github,
  heart,
  copyright,
  particles
}) => {
  useEffect(() => {
    document.title = "Sant - Blockchain Engineer & Front-end Developer";
  });

  return (
    <>
      <NavMenu theme={theme} toggleTheme={toggleTheme} particles={particles} />

      {/* <Sidebar
        theme={theme}
        showSidebar={showSidebar}
        navLinks={navLinks}
        socialIcons={socialIcons}
        toggleSidebar={toggleSidebar}
      />

      <Header theme={theme} particles={particles} />

      <Portfolio github={github} />

      <Tech theme={theme} />

      <PreFooter theme={theme} />

      <Footer
        heart={heart}
        copyright={copyright}
        socialIcons={socialIcons}
        theme={theme}
      /> */}
    </>
  );
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;
export default Layout;
