import React, { useState } from "react";
import { func, string, object } from "prop-types";
import { Folder, Code, MessageCircle } from "react-feather";

import NavMenu from "./NavMenu";
import Sidebar from "./Sidebar";
// import Header from "./Header";
// import Portfolio from "./Main/Portfolio";
// import Tech from "./Main/Tech";
// import PreFooter from "./Main/PreFooter";
// import Footer from "./Footer";

import "./index.css";

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

const navData = [
  {
    id: 0,
    name: "Portfolio",
    href: "#Portfolio",
    icon: <Folder size="20" height={16} />
  },
  {
    id: 1,
    name: "Technologies",
    href: "#Tech",
    icon: <Code size="20" height={16} />
  },
  {
    id: 2,
    name: "Get in touch",
    href: "/contact",
    icon: <MessageCircle size="20" height={16} />
  }
];

const Layout = ({
  theme,
  toggleTheme,
  socialIcons,
  github,
  heart,
  copyright,
  particles
}) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className="Layout">
      <NavMenu
        theme={theme}
        toggleTheme={toggleTheme}
        particles={particles}
        showSidebar={showSidebar}
        toggleSidebar={toggleSidebar}
        navData={navData}
      />

      <Sidebar
        theme={theme}
        showSidebar={showSidebar}
        toggleSidebar={toggleSidebar}
        socialIcons={socialIcons}
        navData={navData}
      />
      {/*
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
    </div>
  );
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;
export default Layout;
