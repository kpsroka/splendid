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

import type { Board, State } from '../State';
import type { Action } from '../../actions/Actions';
import { ActionTypes } from '../../actions/Actions';
import SelectionReducer from './SelectionReducer';

export default function BoardReducer(board:Board, action:Action, state:State):Board {
  switch (action.type) {
    case ActionTypes.ChooseResourceFromStack:
    case ActionTypes.ChooseFactoryFromBoard:
      return {
        ...board,
        selection: SelectionReducer(board.selection, action, state)
      };
    default:
      return board;
  }
}
