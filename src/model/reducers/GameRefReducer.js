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

import type { GameRef } from '../State';
import type { Action } from '../../actions/Actions';
import { ActionTypes } from '../../actions/Actions';

export default function GameRefReducer(gameRef:?GameRef, action:Action):?GameRef {
  if (action.type === ActionTypes.SetGameConfig) {
    if (gameRef === null) {
      return action.gameRef;
    }
  }

  return gameRef;
}
