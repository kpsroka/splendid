import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './ui/App';
import AppReducer from './model/reducers/AppReducer';
import DefaultStatePromise from './model/DefaultState';

DefaultStatePromise
    .then((state) => (createStore(AppReducer, state)))
    .then((store) => {
        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>,
            document.getElementById('root')
        )}
    );
