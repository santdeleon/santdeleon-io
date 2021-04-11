import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import * as serviceWorker from './serviceWorker';

import { ThemeProvider, GlobalStyles } from './theme';
import { BrandProvider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/fonts/index.css';

render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <BrandProvider>
          <GlobalStyles />
          <App />
        </BrandProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root'),
);

serviceWorker.register();
