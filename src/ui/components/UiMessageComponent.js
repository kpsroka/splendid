import { connect } from 'react-redux';
import UiMessage from '../react/UiMessage.js';

function mapStateToProps(state) {
  return {
    message: state.ui.message
  };
}

const UiMessageComponent = connect(mapStateToProps)(UiMessage);

export default UiMessageComponent;
