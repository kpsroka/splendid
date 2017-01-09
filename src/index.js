import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import AppReducer from './model/reducers/AppReducer';
import DefaultState from './model/DefaultState';

let store = createStore(AppReducer, DefaultState);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
