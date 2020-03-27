import React, { useState, useEffect } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Portfolio from '../../components/Portfolio/Portfolio';
import Tech from '../../components/Tech/Tech';
import Footer from '../../components/Footer/Footer';


function Layout(props) {
  useEffect(() => {
    document.title = "Sant | Front-end & Blockchain Developer";
  });

  const [showSidebar, setShowSidebar] = useState(false);

  const socialIcons = {
    linkedin: {
      id: 0,
      icon: props.linkedin,
      url: 'https://www.linkedin.com/in/sant-deleon/'
    },
    angellist: {
      id: 1,
      icon: props.angellist,
      url: 'https://angel.co/santdeleon'
    },
    mail: {
      id: 2,
      icon: props.mail,
      url: 'mailto:sant@santdeleon.co'
    },
  };

  const navLinks = [
    { id: 0, name: 'Bio', href: "#Bio", icon: 'Book' },
    { id: 1, name: 'Portfolio', href: "#Portfolio", icon: 'Folder' },
    { id: 2, name: 'Technologies', href: "#Tech", icon: 'Code' },
    { id: 3, name: 'Get in touch', href: "/contact", icon: 'MessageCircle' }
  ];

  const toggleSidebar = () => { setShowSidebar(!showSidebar); }

  return (
    <>
      <Navbar
        theme={props.theme}
        toggleTheme={props.toggleTheme}
        showSidebar={showSidebar}
        toggleSidebar={toggleSidebar}
        navLinks={navLinks}
        socialIcons={socialIcons}
      />

      <Sidebar
        theme={props.theme}
        showSidebar={showSidebar}
        navLinks={navLinks}
        socialIcons={socialIcons}
      />

      <Header />

      <Portfolio github={props.github} />

      <Tech theme={props.theme}/>

      <Footer
        heart={props.heart}
        copyright={props.copyright}
        socialIcons={socialIcons}
        theme={props.theme}
      />
    </>
  );
}

export default Layout;
