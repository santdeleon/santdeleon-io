import React, { useEffect } from "react";

import NavMenu from "./NavMenu";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Portfolio from "./Main/Portfolio";
import Tech from "./Main/Tech";
import PreFooter from "./Main/PreFooter";
import Footer from "./Footer";

const Layout = ({
  theme,
  toggleTheme,
  showSidebar,
  toggleSidebar,
  navLinks,
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
      <NavMenu
        theme={theme}
        toggleTheme={toggleTheme}
        showSidebar={showSidebar}
        toggleSidebar={toggleSidebar}
        navLinks={navLinks}
        socialIcons={socialIcons}
        particles={particles}
      />

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

export default Layout;
