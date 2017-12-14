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

import AwaitGameReady from './AwaitGameReadyAction.js';
import SetUiMessage from '../SetUiMessageAction.js';

import type { Dispatch, ThunkAction } from '../Actions.js';
import { GetFetchOpts } from '../fetch/JoinGame';
import Fetch from '../fetch/Fetch';

export default function JoinGame(playerName:string, gameRefId:string):ThunkAction {
  return (dispatch:Dispatch) => {
    dispatch(SetUiMessage(`Joining game ${gameRefId}`));

    const { config, params } = GetFetchOpts(playerName, gameRefId);
    dispatch(Fetch(config, params)).then(
        gameConfigOrRef => {
          if (typeof gameConfigOrRef.gameId === 'string' && typeof gameConfigOrRef.playerToken === 'string') {
            dispatch(AwaitGameReady(gameConfigOrRef));
          } else {
            dispatch(AwaitGameReady(gameConfigOrRef.ref));
          }
        }).catch(() => {});
  }
}
