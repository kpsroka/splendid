// @flow

import { connect } from 'react-redux';
import DismissMessageAction from '../actions/DismissMessageAction.js';
import UiMessage from './UiMessage.js';

import type { UiMessageProps, UiMessageDispatch } from './UiMessage.js';
import type { State } from '../model/State.js';

function mapStateToProps(state:State):UiMessageProps {
  return {
    message: state.ui.message
  };
}

function mapDispatchToProps(dispatch):UiMessageDispatch {
  return {
    onDismissMessage: () => dispatch(DismissMessageAction())
  };
}

const UiMessageComponent = connect(mapStateToProps, mapDispatchToProps)(UiMessage);

export default UiMessageComponent;
