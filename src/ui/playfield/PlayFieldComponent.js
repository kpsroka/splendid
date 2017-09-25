// @flow

import { connect } from 'react-redux';
import PlayField from './PlayField.js';

import type { PlayFieldProps } from './PlayField.js';
import type { State } from '../../model/State.js';

function mapStateToProps(state:State):PlayFieldProps {
  if (state.players.length === 2) {
    return { left: [1], right: [] };
  } else if (state.players.length === 3) {
    return { left: [1], right: [2] };
  } else if (state.players.length === 4) {
    return { left: [2, 1], right: [3] };
  } else {
    return { left: [2, 1], right: [3, 4] };
  }
}

const PlayFieldComponent = connect(mapStateToProps)(PlayField);

export default PlayFieldComponent;
