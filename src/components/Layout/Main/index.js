import React from "react";
import { string, object } from "prop-types";

import Portfolio from "./Portfolio";
import Tech from "./Tech";
import Interested from "./Interested";

const propTypes = {
  theme: string.isRequired,
  user: object.isRequired
};

const Main = ({ theme, user }) => (
  <main>
    <Portfolio user={user} />
    <Tech theme={theme} user={user} />
    <Interested theme={theme} />
  </main>
);

Main.propTypes = propTypes;
export default Main;
