import React from "react";
import { array, bool, string, object, func } from "prop-types";

// import Portfolio from "./Portfolio";
import Tech from "./Tech";
import Interested from "./Interested";

const propTypes = {
  theme: string.isRequired
};

const defaultProps = {
  theme: "light"
};

const Main = ({ theme }) => (
  <main>
    {/* <Portfolio github={github} /> */}
    <Tech theme={theme} />
    <Interested theme={theme} />
  </main>
);

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;
export default Main;
