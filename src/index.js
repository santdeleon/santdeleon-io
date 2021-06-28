import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import * as serviceWorker from './serviceWorker';

import { ThemeProvider } from './theme';
import { GlobalStyles } from './theme/globalStyles';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/fonts/index.css';

render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root'),
);

serviceWorker.register();
