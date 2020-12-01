import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

import * as serviceWorker from "./serviceWorker";

import { ThemeProvider } from "./context/useTheme";
import { BrandProvider } from "./context/useBrand";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrandProvider>
        <App />
      </BrandProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
