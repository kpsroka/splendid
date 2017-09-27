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

import SetGameState from './SetGameStateAction.js';
import SetUiMessage from './SetUiMessageAction.js';
import SetUiMode from './SetUiModeAction.js';
import CheckResponse from './async/CheckResponse.js';
import FetchGameState from './async/FetchGameState.js';

const POLL_GAME_STATE_INTERVAL_MILLIS = 1500;

// TODO: Remove duplicate definition (see LoadStateAction.js).
const SESSION_STORAGE_KEY = 'gameref';

export default function PollGameState(gameRef, lastRound=-1) {
  return (dispatch) => {
    CheckResponse(FetchGameState(gameRef, lastRound), false)
    .then(
        gameState => {
          if (gameState === "") {
            setTimeout(
                () => {
                  dispatch(PollGameState(gameRef, lastRound));
                },
                POLL_GAME_STATE_INTERVAL_MILLIS);
          } else {
            sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(gameRef));

            dispatch(SetGameState(gameState));
            if (gameState.gameStatus === 'UNDERWAY') {
              dispatch(SetUiMode('PLAY'));
              setTimeout(
                  () => {
                    dispatch(PollGameState(gameRef, gameState.round));
                  },
                  POLL_GAME_STATE_INTERVAL_MILLIS);
            } else if (gameState.gameStatus === 'FINISHED') {
              dispatch(SetUiMessage('Game finished!'));
            }
          }
        }
    ).catch(
        error => {
          dispatch(SetUiMessage(error.message, 'ERROR'));
        }
    );
  };
}
