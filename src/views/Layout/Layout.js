import React, { useEffect } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Portfolio from '../../components/Portfolio/Portfolio';
import Tech from '../../components/Tech/Tech';
import PreFooter from '../../components/PreFooter/PreFooter';
import Footer from '../../components/Footer/Footer';


const Layout = ({theme, toggleTheme, showSidebar, toggleSidebar, navLinks, socialIcons, github, heart, copyright}) => {
  useEffect(() => {
    document.title = "Sant - Blockchain Engineer & Front-end Developer";
  });

  return (
    <>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        showSidebar={showSidebar}
        toggleSidebar={toggleSidebar}
        navLinks={navLinks}
        socialIcons={socialIcons}
      />

      <Sidebar
        theme={theme}
        showSidebar={showSidebar}
        navLinks={navLinks}
        socialIcons={socialIcons}
      />

      <Header theme={theme}/>

      <Portfolio github={github} />

      <Tech theme={theme}/>

      <PreFooter theme={theme}/>

      <Footer
        heart={heart}
        copyright={copyright}
        socialIcons={socialIcons}
        theme={theme}
      />
    </>
  );
}

export default Layout;
