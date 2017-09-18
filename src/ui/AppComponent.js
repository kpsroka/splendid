import { connect } from 'react-redux';
import App from './App.js';
import LoadState from '../actions/LoadStateAction.js';

function mapStateToProps(state) {
  return {
    isInitialized: state.ui.mode !== 'INIT'
  };
}

function mapPropsToDispatch(dispatch) {
  return {
    initialize: () => dispatch(LoadState()),
  }
}

const AppComponent = connect(mapStateToProps, mapPropsToDispatch)(App);

export default AppComponent;
