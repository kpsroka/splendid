import { connect } from 'react-redux';
import Ui from './Ui.js';

function mapStateToProps(state) {
  return {
    mode: state.ui.mode,
    showField: state.players.length > 0
  }
}

const UiComponent = connect(mapStateToProps)(Ui);

export default UiComponent;
