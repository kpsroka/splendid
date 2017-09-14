import { connect } from 'react-redux';
import DismissMessageAction from '../actions/DismissMessageAction.js';
import UiMessage from './UiMessage.js';

function mapStateToProps(state) {
  return {
    message: state.ui.message
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDismissMessage: () => dispatch(DismissMessageAction())
  };
}

const UiMessageComponent = connect(mapStateToProps, mapDispatchToProps)(UiMessage);

export default UiMessageComponent;
