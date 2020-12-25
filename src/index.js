import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import * as serviceWorker from './serviceWorker';

import { ThemeProvider } from './context/ThemeContext';
import { BrandProvider } from './context/BrandContext';

import './stylesheets/colors.css';
import './stylesheets/fonts.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  document.getElementById('root'),
);

serviceWorker.register();
