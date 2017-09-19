// @flow

import { connect } from 'react-redux';
import WelcomeScreen from './WelcomeScreen.js';
import SetUiMode from '../../actions/SetUiModeAction.js';

import type { WelcomeScreenProps, WelcomeScreenDispatch } from './WelcomeScreen.js';
import type { State, UiMode } from '../../model/State.js';

function mapStateToProps(state:State):WelcomeScreenProps {
  return {
    mode: state.ui.mode
  };
}

function mapPropsToDispatch(dispatch):WelcomeScreenDispatch {
  return {
    setUiMode: (mode:UiMode) => dispatch(SetUiMode(mode)),
  }
}

const WelcomeScreenComponent = connect(mapStateToProps, mapPropsToDispatch)(WelcomeScreen);

export default WelcomeScreenComponent;
