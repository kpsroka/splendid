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

import AwaitGameReady from "./AwaitGameReadyAction.js";
import SetUiMessage from "./SetUiMessageAction.js";
import CheckResponse from "./async/CheckResponse.js";
import CreateGame from "./async/CreateGame.js";

export default function NewGame(playerName, playerCount) {
  return (dispatch) => {
    dispatch(SetUiMessage('Starting new game'));

    CheckResponse(CreateGame(playerName, playerCount))
    .then(
        gameRef => {
          dispatch(SetUiMessage(`Created new game (${gameRef.gameId})`));
          dispatch(AwaitGameReady(gameRef));
        })
    .catch(
        error => {
          dispatch(SetUiMessage(error.message, 'ERROR'));
        }
    );
  }
}
