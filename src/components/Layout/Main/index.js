import React from "react";
import { string } from "prop-types";

import { useBrand } from "../../../context/useBrand";

import Portfolio from "./Portfolio";
import Tech from "./Tech";

const propTypes = {
  theme: string.isRequired
};

const Main = ({ theme }) => {
  const { projects, technologies } = useBrand();

  return (
    <main className="Main">
      <Portfolio theme={theme} projects={projects} />
      <Tech theme={theme} technologies={technologies} />
    </main>
  );
};

Main.propTypes = propTypes;
export default Main;
