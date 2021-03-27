import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from './theme';
import { BrandProvider, ThemeProvider } from './context';
import * as serviceWorker from './serviceWorker';

import App from './App';

import './tokens/build/tokens.css';
import './assets/fonts/index.css';
import './theme/utility.css';

render(
  <StrictMode>
    <BrowserRouter>
      <BrandProvider>
        <ThemeProvider>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </BrandProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
