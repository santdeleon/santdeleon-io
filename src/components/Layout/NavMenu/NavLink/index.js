import React from "react";
import { string } from "prop-types";
import { Folder, Code, MessageCircle } from "react-feather";

import "./index.css";

const NavLink = ({ icon, name, theme, href, toggleSidebar, isSidebarLink }) => {
  let el;

  if (icon === "Folder") {
    el = <Folder size="20" height={16} />;
  } else if (icon === "Code") {
    el = <Code size="20" height={16} />;
  } else {
    el = <MessageCircle size="20" height={16} />;
  }

  return (
    <li
      className="nav-link fromLeft"
      onClick={isSidebarLink ? toggleSidebar : null}
    >
      {el}
      <a
        href={href}
        style={theme === "light" ? { color: "#000" } : { color: "#fff" }}
        aria-label={name}
        title={name}
      >
        {name}
      </a>
    </li>
  );
};

NavLink.propTypes = {
  icon: string.isRequired,
  name: string.isRequired,
  theme: string.isRequired,
  href: string.isRequired
};

export default NavLink;
