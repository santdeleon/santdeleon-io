import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './views/App/App';
import * as serviceWorker from './serviceWorker';

const style = {
  marginTop: '1.25rem',
  padding: '2rem',
  borderRadius: '5px',
  boxShadow: '1px 7px 22px rgba(0, 0, 0, 0.4)',
  background: 'linear-gradient(to right, #9D50BB 0%, #6E48AA 51%, #9D50BB 100%)',
  fontWeight: 'normal',
  fontSize: '1rem',
  color: 'white'
};

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
