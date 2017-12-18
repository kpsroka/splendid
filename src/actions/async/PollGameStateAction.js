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

import SetGameState from '../SetGameStateAction';
import SetUiMode from '../SetUiModeAction';
import FinishGameAction from './FinishGameAction';
import type { Dispatch, ThunkAction } from '../Actions';
import Fetch from '../fetch/Fetch';
import { GetFetchOpts } from '../fetch/FetchGameState';
import type { GameRef } from '../../model/State';

const POLL_GAME_STATE_INTERVAL_MILLIS = 1500;

// TODO: Remove duplicate definition (see LoadStateAction.js).
const SESSION_STORAGE_KEY = 'gameref';

export default function PollGameState(gameRef:GameRef, lastRound:number = -1):ThunkAction {
  return (dispatch:Dispatch) => {
    const { config, params } = GetFetchOpts(gameRef, lastRound);
    dispatch(Fetch(config, params)).then(
        (gameState) => {
          if (gameState === '') {
            setTimeout(
                () => { dispatch(PollGameState(gameRef, lastRound)); },
                POLL_GAME_STATE_INTERVAL_MILLIS
            );
          } else {
            sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(gameRef));

            dispatch(SetGameState(gameState));
            if (gameState.gameStatus === 'UNDERWAY') {
              dispatch(SetUiMode('PLAY'));
              setTimeout(
                  () => {
                    dispatch(PollGameState(gameRef, gameState.round));
                  },
                  POLL_GAME_STATE_INTERVAL_MILLIS
              );
            } else if (gameState.gameStatus === 'FINISHED') {
              dispatch(FinishGameAction());
            }
          }
        }
    ).catch();
  };
}
