// @flow

import { connect } from 'react-redux';
import PlayerBox from './PlayerBox.js';

import type { PlayerBoxProps, PlayerBoxOwnProps } from './PlayerBox.js';
import type { State, GameState } from '../../model/State.js';

function mapStateToProps(state:State, ownProps:PlayerBoxOwnProps):PlayerBoxProps {
  if (state.players.length <= ownProps.playerIndex) {
    return { disabled: true };
  } else {
    return {
      disabled: false,
      name: state.players[ownProps.playerIndex].name,
      score: getScore(state.gameState, ownProps.playerIndex),
    };
  }
}

function getScore(gameState:?GameState, playerIndex:number):number {
  if (gameState) {
    let playerHand = gameState.playerState[playerIndex].hand;
    return playerHand.factories.reduce((sum, next) => (sum + next.points), 0);
  } else {
    return 0;
  }
}

const PlayerBoxComponent = connect(mapStateToProps)(PlayerBox);

export default PlayerBoxComponent;
