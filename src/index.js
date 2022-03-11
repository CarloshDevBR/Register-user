import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home/';
import Users from './Pages/Users'
import GlobalStyles from './globalStyles.js';

ReactDOM.render(
  <React.StrictMode>
    <Users />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
