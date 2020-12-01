import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import cx from "classnames";

import { useBrand } from "../../../context/useBrand.js";
import { useTheme } from "../../../context/useTheme.js";

const Footer = () => {
  const { theme } = useTheme();
  const { socialIcons } = useBrand();

  return (
    <Navbar as="footer" fixed="bottom" className="Footer">
      <Nav className="mr-auto">
        <p
          className={cx("font-weight-light mb-0", {
            "rainbow-text": theme === "dark"
          })}
        >
          Made with
          <span role="img" aria-label="Two Hearts Emoji" className="mx-2">
            💕
          </span>
          by Sant
        </p>
      </Nav>
      <Nav className="ml-auto">
        {socialIcons.map(({ id, name, color, href, Icon }) => (
          <Nav.Link
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cx({
              "text-secondary": theme === "light",
              "text-light": theme === "dark"
            })}
            title={name}
            aria-label={name}
          >
            {Icon}
          </Nav.Link>
        ))}
      </Nav>
    </Navbar>
  );
};

export default Footer;
