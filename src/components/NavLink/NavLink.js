import React from 'react';
import { string } from 'prop-types';
import { Book, Folder, Code, MessageCircle } from 'react-feather';

import './NavLink.css';


const NavLink = ({icon, name, theme, href}) => {
  let el;

  if (icon === 'Book') { el = <Book size="20" height={16} /> }
  else if (icon === 'Folder') { el = <Folder size="20" height={16} /> }
  else if (icon === 'Code') { el = <Code size="20" height={16} /> }
  else { el = <MessageCircle size="20" height={16} /> }

  return (
    <li className="nav-link fromLeft">
      {el}
      <a href={href} style={(theme === "light") ? { color: "#000" } : { color: "#fff" }} aria-label={name} title={name}>{name}</a>
    </li>
  );
}

NavLink.propTypes = {
  icon: string.isRequired,
  name: string.isRequired,
  theme: string.isRequired,
  href: string.isRequired,
};

export default NavLink;
