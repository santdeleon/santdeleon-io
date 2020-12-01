import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

import * as serviceWorker from "./serviceWorker";

import { ThemeProvider } from "./context/useTheme";
import { BrandProvider } from "./context/useBrand";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <BrandProvider>
          <App />
        </BrandProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
