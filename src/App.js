import React from "react";

import Layout from "./components/Layout";

import { GlobalStyles } from "./context/useTheme";
import { useTheme } from "./context/useTheme";

import "./App.css";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className="App">
      <div className="rainbow-top" />
      <GlobalStyles />
      <Layout />
    </div>
  );
};

export default App;
