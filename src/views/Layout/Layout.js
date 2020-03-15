import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Portfolio from '../../components/Portfolio/Portfolio';


function Layout(props) {

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
    { id: 0, name: 'Bio', href: "", icon: 'Book' },
    { id: 1, name: 'Portfolio', href: "", icon: 'Folder' },
    { id: 2, name: 'Technologies', href: "", icon: 'Code' },
    { id: 3, name: 'Get in touch', href: "", icon: 'MessageCircle' }
  ];

  useEffect(() => {
    document.title = "Sant | Front-end & Blockchain Developer";
  });

  const toggleSidebar = () => { setShowSidebar(!showSidebar); }

  return (
    <section>
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

      <Portfolio />
    </section>
  );
}

export default Layout;
