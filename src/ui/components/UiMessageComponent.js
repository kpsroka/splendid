import { connect } from 'react-redux';
import Actions from '../../actions/Actions.js';
import UiMessage from '../react/UiMessage.js';

function mapStateToProps(state) {
  return {
    message: state.ui.message
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDismissMessage: () => dispatch(Actions.DismissMessage())
  };
}

const UiMessageComponent = connect(mapStateToProps, mapDispatchToProps)(UiMessage);

export default UiMessageComponent;
