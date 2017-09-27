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

import SetUiMessage from './SetUiMessageAction.js';
import GetGameData from './GetGameDataAction.js';
import CheckResponse from './async/CheckResponse.js';
import FetchGameStatus from './async/FetchGameStatus.js';

const STATUS_POLL_INTERVAL_MILLIS = 2500;

export default function AwaitGameReady(gameRef) {
  return (dispatch) => {
    dispatch(SetUiMessage(`Waiting for game ${gameRef.gameId} to be ready`));

    location.hash = `#${gameRef.gameId}`;

    let gameUnderway = false;
    let intervalId = setInterval(() => {
      CheckResponse(FetchGameStatus(gameRef.gameId))
      .then(
          gameStatus => {
            if (gameUnderway) {
              // Prevent late response from coming in.
              return;
            }

            if (gameStatus.gameStatus === "UNDERWAY") {
              gameUnderway = true;
              clearInterval(intervalId);

              dispatch(GetGameData(gameRef));
            }
          }
      );
    },
    STATUS_POLL_INTERVAL_MILLIS)
  };
}
