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

import SetGameState from './SetGameStateAction.js';
import SetUiMessage from './SetUiMessageAction.js';
import { TakeResources, TakeFactory } from './fetch/ExecutePlayerAction.js';
import CheckResponse from './fetch/CheckResponse.js';

import type { Dispatch, GetState, ThunkAction } from './Actions.js';

export default function TakeSelectionAction():ThunkAction {
  return (dispatch:Dispatch, getState:GetState) => {
    let state = getState();

    if (!state.gameState) {
      throw new Error("Game state not present");
    }

    let selection = state.gameState.board.selection;
    if (selection.type === 'RESOURCE_SELECTION') {
      runAction(
          dispatch,
          TakeResources(state.gameRef, selection.selection.join()));
    } else if (selection.type === 'FACTORY_SELECTION') {
      runAction(
          dispatch,
          TakeFactory(state.gameRef, selection.row, selection.item)
      );
    } else {
      dispatch(SetUiMessage("Wrong selection", 'ERROR'));
    }
  }
}

function runAction(dispatch, actionPromise) {
  CheckResponse(actionPromise)
  .then(
      gameState => {
        dispatch(SetGameState(gameState));
      }
  )
  .catch(
      error => {
        dispatch(SetUiMessage(error.message, 'ERROR'));
      }
  );
}
