import React from 'react';

import Layout from './components/Layout';

import { GlobalStyles } from './context/ThemeContext';

import './App.css';

const App = () => {
  window.onload = () =>
    console.log('%c SANT WUZ HERE! ', 'background: #222; color: #bada55');

  return (
    <div className="App">
      <div className="App__Div--rainbow-top" />
      <GlobalStyles />
      <Layout />
    </div>
  );
};

export default App;
