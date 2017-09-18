import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import AppComponent from './ui/AppComponent.js';
import AppReducer from './model/reducers/AppReducer.js';
import DefaultState from './model/DefaultState.js';
import './index.css';

const loggerMiddleware = createLogger();
const store = createStore(
    AppReducer,
    DefaultState,
    applyMiddleware(thunkMiddleware, loggerMiddleware));

ReactDOM.render(
    <Provider store={store}>
      <AppComponent />
    </Provider>,
    document.getElementById('root')
);
