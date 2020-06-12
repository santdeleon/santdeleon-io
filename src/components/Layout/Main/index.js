import React from "react";
import { string, object } from "prop-types";

import Portfolio from "./Portfolio";
import Tech from "./Tech";
import Interested from "./Interested";

const propTypes = {
  theme: string.isRequired,
  github: object.isRequired
};

const defaultProps = {
  theme: "light",
  github: {}
};

const Main = ({ theme, github }) => (
  <main>
    <Portfolio github={github} />
    <Tech theme={theme} />
    <Interested theme={theme} />
  </main>
);

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;
export default Main;
