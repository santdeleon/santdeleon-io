import React, { useEffect } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Portfolio from '../../components/Portfolio/Portfolio';
import Tech from '../../components/Tech/Tech';
import PreFooter from '../../components/PreFooter/PreFooter';
import Footer from '../../components/Footer/Footer';


const Layout = props => {
  useEffect(() => {
    document.title = "Sant | Front-end & Blockchain Developer";
  });

  return (
    <>
      <Navbar
        theme={props.theme}
        toggleTheme={props.toggleTheme}
        showSidebar={props.showSidebar}
        toggleSidebar={props.toggleSidebar}
        navLinks={props.navLinks}
        socialIcons={props.socialIcons}
      />

      <Sidebar
        theme={props.theme}
        showSidebar={props.showSidebar}
        navLinks={props.navLinks}
        socialIcons={props.socialIcons}
      />

      <Header />

      <Portfolio github={props.github} />

      <Tech theme={props.theme}/>

      <PreFooter theme={props.theme}/>

      <Footer
        heart={props.heart}
        copyright={props.copyright}
        socialIcons={props.socialIcons}
        theme={props.theme}
      />
    </>
  );
}

export default Layout;
