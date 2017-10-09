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

import GameRefReducer from './GameRefReducer.js';
import GameStateReducer from './GameStateReducer.js';
import PlayersReducer from './PlayersReducer.js';
import UiStateReducer from './UiStateReducer.js';

import type { State } from '../State.js';
import type { Action } from '../../actions/Actions.js';

function AppReducer(state:State, action:Action):State {
  return {
    ...state,
    gameRef: GameRefReducer(state.gameRef, action),
    players: PlayersReducer(state.players, action),
    ui: UiStateReducer(state.ui, action),
    gameState: GameStateReducer(state.gameState, action),
  };
}

export default AppReducer;
