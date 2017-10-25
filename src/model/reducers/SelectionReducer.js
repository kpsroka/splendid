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

import type { Action } from '../../actions/Actions';
import { ActionTypes } from '../../actions/Actions';
import type { Selection, State } from '../State';
import ChooseResourceReducer from './case/ChooseResourceReducer';
import ChooseFactoryReducerFn from './case/ChooseFactoryReducer';

export default function SelectionReducer(selection:Selection, action:Action, state:State):Selection {
  if (!state.gameState
      || state.gameState.currentPlayerIndex !== 0
      || state.gameState.gameStatus !== "UNDERWAY") {
    return selection;
  }

  if (action.type === ActionTypes.ChooseResourceFromStack) {
    return ChooseResourceReducer(selection, action, state.gameState.board.resources);
  } else if (action.type === ActionTypes.ChooseFactoryFromBoard) {
    return ChooseFactoryReducerFn(selection, action);
  } else {
    return selection;
  }
}
