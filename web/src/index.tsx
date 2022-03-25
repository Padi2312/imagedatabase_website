import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { browserHistory } from './history';
import { Router } from 'react-router-dom';

ReactDOM.render(
  <Router history={browserHistory}>
    <App />
  </Router>
  ,
  document.getElementById('root')
);
