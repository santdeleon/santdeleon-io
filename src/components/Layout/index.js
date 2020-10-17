import React, { useState } from "react";
import { func, string } from "prop-types";

import user from "../../api/user";
import brand from "../../api/brand";

import NavMenu from "./NavMenu";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
};

const Layout = ({ theme, toggleTheme }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="Layout">
      <NavMenu
        theme={theme}
        toggleTheme={toggleTheme}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        navData={brand.navData}
      />

      <Sidebar
        theme={theme}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        socialIcons={brand.socialIcons}
        navData={brand.navData}
      />

      <Header theme={theme} user={user} />

      <Main theme={theme} user={user} />

      <Footer socialIcons={brand.socialIcons} theme={theme} />
    </div>
  );
};

Layout.propTypes = propTypes;
export default Layout;
