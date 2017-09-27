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

import BoardReducer from './BoardReducer.js';
import { ActionTypes } from '../../actions/Actions.js';

export default function GameStateReducer(gameState, action) {
  switch (action.type) {
    case ActionTypes.SetGameState: {
      return action.gameState;
    }
    case ActionTypes.ChooseResourceFromStack:
    case ActionTypes.ChooseFactoryFromBoard: {
      if (gameState.currentPlayerIndex === 0) {
        return {...gameState, board: BoardReducer(gameState.board, action)};
      } else {
        return gameState;
      }
    }
    default: return gameState;
  }
}
