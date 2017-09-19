// @flow

import { connect } from 'react-redux';
import Ui from './Ui.js';

import type { UiProps } from './Ui.js';
import type { State } from '../model/State.js';

function mapStateToProps(state:State):UiProps {
  return {
    mode: state.ui.mode,
    showField: state.players.length > 0
  }
}

const UiComponent = connect(mapStateToProps)(Ui);

export default UiComponent;
