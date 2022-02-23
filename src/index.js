import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom'

import 'antd/dist/antd.css'


render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
