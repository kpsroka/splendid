/*
 * Copyright 2017 K. P. Sroka
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// @flow

import { connect } from 'react-redux';
import PlayerBox from './PlayerBox.js';

import type { PlayerBoxProps, PlayerBoxOwnProps } from './PlayerBox.js';
import type { State, GameState } from '../../model/State.js';

function mapStateToProps(state:State, ownProps:PlayerBoxOwnProps):PlayerBoxProps {
  return {
    name: state.players[ownProps.playerIndex].name,
    score: getScore(state.gameState, ownProps.playerIndex),
  };
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
