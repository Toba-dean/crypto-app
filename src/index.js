import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom'

import 'antd/dist/antd.css'

import { store } from './app/store'
import { Provider } from 'react-redux'


render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
