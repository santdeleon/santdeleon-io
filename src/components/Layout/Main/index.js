import React from "react";
import { string, object } from "prop-types";

import Portfolio from "./Portfolio";
import Tech from "./Tech";
import Interested from "./Interested";

const propTypes = {
  theme: string.isRequired,
  github: object.isRequired,
  user: object.isRequired
};

const defaultProps = {
  theme: "light",
  github: {},
  array: {}
};

const Main = ({ theme, github, user }) => (
  <main>
    {/* <Portfolio github={github} user={user} /> */}
    <Tech theme={theme} user={user} />
    {/* <Interested theme={theme} /> */}
  </main>
);

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;
export default Main;
