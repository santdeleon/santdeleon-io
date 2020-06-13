import React, { useState } from "react";
import { func, string, object } from "prop-types";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faCopyright } from "@fortawesome/free-solid-svg-icons";

import user from "../../api/user";
import brand from "../../api/brand";

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
        navData={brand.navData}
      />

      <Sidebar
        theme={theme}
        showSidebar={showSidebar}
        toggleSidebar={toggleSidebar}
        socialIcons={brand.socialIcons}
        navData={brand.navData}
      />

      <Header theme={theme} particles={particles} user={user} />

      <Main theme={theme} github={faGithub} user={user} />

      <Footer
        heart={faHeart}
        copyright={faCopyright}
        socialIcons={brand.socialIcons}
        theme={theme}
      />
    </div>
  );
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;
export default Layout;
