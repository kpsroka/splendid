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

import type { Dispatch, GetState, ThunkAction } from '../Actions';
import SetUiMessage from '../SetUiMessageAction';

export default function FinishGameAction():ThunkAction {
  return (dispatch:Dispatch, getState:GetState) => {
    const state = getState();
    if (!state.gameState) {
      throw new Error('Game state not present');
    }

    const { playerState: playersState } = state.gameState;
    const winningPlayer = playersState.map((playerState, index) => ({
      playerName: state.players[index].name,
      score: playerState.hand.factories.reduce(
          (acc, nextFactory) => (acc + nextFactory.points),
          /* initialValue */ 0
      )
    })).sort((a, b) => (b.score - a.score))[0].playerName;

    dispatch(SetUiMessage(`Game finished, ${winningPlayer} wins!`));
  };
}
