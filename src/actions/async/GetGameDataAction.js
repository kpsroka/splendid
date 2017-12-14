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

import PollGameState from './PollGameStateAction.js';
import SetUiMessage from '../SetUiMessageAction.js';
import SetGameConfig from '../SetGameConfigAction.js';

import type { Dispatch, ThunkAction } from '../Actions.js';
import type { GameRef } from '../../model/State.js';
import { GetFetchOpts } from '../fetch/FetchGameConfig';
import Fetch from '../fetch/Fetch';

export default function GetGameData(gameRef:GameRef):ThunkAction {
  return (dispatch:Dispatch) => {
    dispatch(SetUiMessage(`Joining game ${gameRef.gameId}`));
    const { config, params } = GetFetchOpts(gameRef);
    dispatch(Fetch(config, params)).then(
        gameConfig => {
          dispatch(SetGameConfig(gameConfig));
          dispatch(PollGameState(gameRef));
        }).catch();
  }
}
