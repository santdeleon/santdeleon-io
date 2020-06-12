import React, { useState } from "react";
import { func, string, object } from "prop-types";
import { Folder, Code, MessageCircle } from "react-feather";
import { faAngellist, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faHeart,
  faCopyright
} from "@fortawesome/free-solid-svg-icons";

import NavMenu from "./NavMenu";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
  github: object.isRequired,
  heart: object.isRequired,
  copyright: object.isRequired,
  particles: object.isRequired
};

const defaultProps = {
  theme: "light",
  toggleTheme: () => {},
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

const socialIcons = {
  linkedin: {
    id: 0,
    icon: faLinkedinIn,
    url: "https://www.linkedin.com/in/sant-deleon/"
  },
  angellist: {
    id: 1,
    icon: faAngellist,
    url: "https://angel.co/santdeleon"
  },
  mail: {
    id: 2,
    icon: faEnvelope,
    url: "mailto:sant@santdeleon.co"
  }
};

const Layout = ({
  theme,
  toggleTheme,
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

      <Header theme={theme} particles={particles} />

      <Main theme={theme} />

      <Footer
        heart={faHeart}
        copyright={faCopyright}
        socialIcons={socialIcons}
        theme={theme}
      />
    </div>
  );
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;
export default Layout;
