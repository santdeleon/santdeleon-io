import React from "react";

import Layout from "./components/Layout";

import { GlobalStyles } from "./context/useTheme";

import "./App.css";

const App = () => (
  <div className="App">
    <div className="App__Div--rainbow-top" />
    <GlobalStyles />
    <Layout />
  </div>
);

export default App;
