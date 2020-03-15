import React from 'react';
import { Book, Folder, Code, MessageCircle } from 'react-feather';
import './NavLink.css';


function NavLink(props) {
  let el;

  if (props.icon === 'Book') { el = <Book size="20" height={16} /> }
  else if (props.icon === 'Folder') { el = <Folder size="20" height={16} /> }
  else if (props.icon === 'Code') { el = <Code size="20" height={16} /> }
  else { el = <MessageCircle size="20" height={16} /> }

  return (
    <li className="nav-link fromLeft">
      {el}
      <a
        href={props.href} aria-label={props.name}
        style={(props.theme === "light") ? { color: "#000" } : { color: "#fff" }}
      >
      {props.name}
      </a>
    </li>
  );
}

export default NavLink;
