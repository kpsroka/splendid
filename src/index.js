import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import App from './ui/App';
import AppReducer from './model/reducers/AppReducer';
import DefaultState from './model/DefaultState';
import './index.css';

const loggerMiddleware = createLogger();
const store = createStore(
    AppReducer,
    DefaultState,
    applyMiddleware(thunkMiddleware, loggerMiddleware));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);
