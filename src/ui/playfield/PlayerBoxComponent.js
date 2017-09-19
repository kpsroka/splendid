// @flow

import { connect } from 'react-redux';
import PlayerBox from './PlayerBox.js';

import type { PlayerBoxProps, PlayerBoxOwnProps } from './PlayerBox.js';
import type { State } from '../../model/State.js';

function mapStateToProps(state:State, ownProps:PlayerBoxOwnProps):PlayerBoxProps {
  if (state.players.length <= ownProps.playerIndex) {
    return { disabled: true };
  } else {
    return {
      disabled: false,
      name: state.players[ownProps.playerIndex].name,
      score: 0
    };
  }
}

const PlayerBoxComponent = connect(mapStateToProps)(PlayerBox);

export default PlayerBoxComponent;
