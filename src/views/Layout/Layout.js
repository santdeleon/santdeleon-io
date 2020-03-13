import React, { useState, useEffect } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';


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
    { id: 0, name: 'Bio', href: "" },
    { id: 1, name: 'Portfolio', href: "" },
    { id: 2, name: 'Technologies', href: "" },
    { id: 3, name: 'Get in touch', href: "" }
  ];

  useEffect(() => {
    document.title = "Sant | Front-end & Blockchain Developer";
  });

  function toggleSidebar() { setShowSidebar(!showSidebar); }

  return (
    <section>
      <Navbar
        showSidebar={showSidebar}
        toggleSidebar={toggleSidebar}
        navLinks={navLinks}
        socialIcons={socialIcons}
      />

      <Sidebar
        showSidebar={showSidebar}
        navLinks={navLinks}
        socialIcons={socialIcons}
      />
    </section>
  );
}

export default Layout;
