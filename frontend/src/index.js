import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes.js'
import GlobalStyles from './style/globalStyles.js';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
