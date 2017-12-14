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

import AwaitGameReady from "./AwaitGameReadyAction.js";
import SetUiMessage from "../SetUiMessageAction.js";

import type { Dispatch, ThunkAction } from '../Actions.js';
import { GetFetchOpts } from '../fetch/CreateGame';
import Fetch from '../fetch/Fetch';

export default function NewGame(playerName:string, playerCount:number):ThunkAction {
  return (dispatch:Dispatch) => {
    dispatch(SetUiMessage('Starting new game'));
    const { config, params } = GetFetchOpts(playerName, playerCount);
    dispatch(Fetch(config, params))
    .then(
        gameRef => {
          dispatch(SetUiMessage(`Created new game (${gameRef.gameId})`));
          dispatch(AwaitGameReady(gameRef));
        }).catch();
  }
}
