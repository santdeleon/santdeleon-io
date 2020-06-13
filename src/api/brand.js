import React from "react";
import { Folder, Code, MessageCircle } from "react-feather";
import { faAngellist, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default {
  navData: [
    {
      id: 0,
      name: "Portfolio",
      href: "#Portfolio",
      Icon: <Folder size="20" height={16} />
    },
    {
      id: 1,
      name: "Technologies",
      href: "#Tech",
      Icon: <Code size="20" height={16} />
    },
    {
      id: 2,
      name: "Get in touch",
      href: "/contact",
      Icon: <MessageCircle size="20" height={16} />
    }
  ],
  socialIcons: {
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
      url: "mailto:sant@santdeleon.io"
    }
  }
};
