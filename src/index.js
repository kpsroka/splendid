import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import App from './ui/App';
import AppReducer from './model/reducers/AppReducer';
import DefaultStatePromise from './model/DefaultState';
import './index.css';

const loggerMiddleware = createLogger();

DefaultStatePromise
    .then((state) => (
        createStore(AppReducer, state, applyMiddleware(thunkMiddleware, loggerMiddleware))))
    .then((store) => {
      ReactDOM.render(
          <Provider store={store}>
            <App />
          </Provider>,
          document.getElementById('root')
      )
    }
);
