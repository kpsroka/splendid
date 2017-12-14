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

import SetGameState from '../SetGameStateAction.js';
import SetUiMessage from '../SetUiMessageAction.js';

import type { Dispatch, GetState, ThunkAction } from '../Actions.js';
import { GetTakeFactoryFetchOps, GetTakeResourcesFetchOpts } from '../fetch/ExecutePlayerAction';
import Fetch from '../fetch/Fetch';

export default function TakeSelectionAction():ThunkAction {
  return (dispatch:Dispatch, getState:GetState) => {
    let state = getState();

    if (!state.gameState || !state.gameRef) {
      throw new Error('Game not present');
    }

    let selection = state.gameState.board.selection;

    if (selection.type === 'RESOURCE_SELECTION') {
      const { config, params } = GetTakeResourcesFetchOpts(state.gameRef, selection.selection.join());
      runAction(dispatch, dispatch(Fetch(config, params)));
    } else if (selection.type === 'FACTORY_SELECTION') {
      const { config, params } = GetTakeFactoryFetchOps(state.gameRef, selection.row, selection.item);
      runAction(dispatch, dispatch(Fetch(config, params)));
    } else {
      dispatch(SetUiMessage('Wrong selection', 'ERROR'));
    }
  }
}

function runAction(dispatch, fetchPromise) {
  fetchPromise.then(gameState => (dispatch(SetGameState(gameState)))).catch();
}
