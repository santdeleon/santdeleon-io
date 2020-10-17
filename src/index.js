import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

import * as serviceWorker from "./serviceWorker";

// Enable React in Concurrent Mode (an experimental feature)
const rootNode = document.getElementById("root");
const root = ReactDOM.unstable_createRoot(rootNode);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorker.register();
