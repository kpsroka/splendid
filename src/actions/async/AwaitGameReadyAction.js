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

import SetUiMessage from '../SetUiMessageAction';
import GetGameData from './GetGameDataAction';

import type { Dispatch, ThunkAction } from '../Actions';
import type { GameRef } from '../../model/State';
import { GetFetchOpts } from '../fetch/FetchGameStatus';
import Fetch from '../fetch/Fetch';

const STATUS_POLL_INTERVAL_MILLIS = 2500;

export default function AwaitGameReady(gameRef:GameRef):ThunkAction {
  return (dispatch:Dispatch) => {
    dispatch(SetUiMessage(`Waiting for game ${gameRef.gameId} to be ready`));

    window.location.hash = `#${gameRef.gameId}`;

    const { config, params } = GetFetchOpts(gameRef.gameId);
    dispatch(Fetch(config, params)).then(
        (gameStatus) => {
          if (gameStatus.gameStatus === 'UNDERWAY') {
            dispatch(GetGameData(gameRef));
          } else {
            setTimeout(
                () => {
                  dispatch(AwaitGameReady(gameRef));
                },
                STATUS_POLL_INTERVAL_MILLIS
            );
          }
        }
    ).catch();
  };
}
