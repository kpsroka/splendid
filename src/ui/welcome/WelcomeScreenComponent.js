import { connect } from 'react-redux';
import WelcomeScreen from './WelcomeScreen.js';
import SetUiMode from '../../actions/SetUiModeAction.js';

function mapStateToProps(state) {
  return {
    mode: state.ui.mode
  };
}

function mapPropsToDispatch(dispatch) {
  return {
    setUiMode: (mode) => dispatch(SetUiMode(mode)),
  }
}

const WelcomeScreenComponent = connect(mapStateToProps, mapPropsToDispatch)(WelcomeScreen);

export default WelcomeScreenComponent;
