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

import AwaitGameReady from './GetGameDataAction.js';
import SetUiMode from './SetUiModeAction.js';

import type { Dispatch, ThunkAction } from './Actions.js';

// TODO: Remove duplicate definition (see PollGameStateAction.js).
const SESSION_STORAGE_KEY = 'gameref';

export default function LoadStateAction():ThunkAction {
  return (dispatch:Dispatch) => {
    let hashGameId = location.hash.slice(1);

    let sessionGameRefStr = sessionStorage.getItem(SESSION_STORAGE_KEY);
    let sessionGameRef =
        sessionGameRefStr === null || sessionGameRefStr === undefined ? undefined : JSON.parse(sessionGameRefStr);

    if (sessionGameRef === undefined && hashGameId === '') {
      dispatch(SetUiMode('WELCOME'));
    } else if (sessionGameRef === undefined && hashGameId !== '') {
      dispatch(SetUiMode('JOIN'));
    } else if (sessionGameRef !== undefined
        && (hashGameId === '' || hashGameId === sessionGameRef.gameId)) {
      dispatch(AwaitGameReady(sessionGameRef));
    } else {
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
      dispatch(SetUiMode('JOIN'));
    }
  };
}