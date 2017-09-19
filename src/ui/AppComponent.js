// @flow

import { connect } from 'react-redux';
import App from './App.js';
import LoadState from '../actions/LoadStateAction.js';

import type { AppProps, AppDispatch } from './App.js';
import type { State } from '../model/State.js';

function mapStateToProps(state:State):AppProps {
  return {
    isInitialized: state.ui.mode !== 'INIT'
  };
}

function mapPropsToDispatch(dispatch):AppDispatch {
  return {
    initialize: () => dispatch(LoadState()),
  }
}

const AppComponent = connect(mapStateToProps, mapPropsToDispatch)(App);

export default AppComponent;
