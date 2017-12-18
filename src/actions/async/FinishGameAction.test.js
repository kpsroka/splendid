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

import sinon from 'sinon';
import FinishGameAction from './FinishGameAction';
import DefaultState from '../../model/DefaultState';
import { ActionTypes } from '../Actions';

describe('FinishGameAction', () => {
  it("dispatches SetUiMessage action with winner's name", () => {
    const state = {
      ...DefaultState,
      players: [{ name: 'FooPlayer' }, { name: 'BarPlayer' }, { name: 'BazPlayer' }],
      gameState: {
        playerState: [
          /* FooPlayer */ { hand: { factories: [{ color: 0, cost: [], points: 3 }] } },
          /* BarPlayer */ {
            hand: {
              factories: [
                { color: 1, cost: [], points: 3 },
                { color: 1, cost: [], points: 4 }
              ]
            }
          },
          /* BazPlayer */ {
            hand: {
              factories: [
                { color: 2, cost: [], points: 4 },
                { color: 3, cost: [], points: 1 },
                { color: 4, cost: [], points: 1 }
              ]
            }
          }
        ]
      }
    };

    const dispatchSpy = sinon.spy();

    FinishGameAction()(
        dispatchSpy,
        /* getState */ () => state
    );

    sinon.assert.calledWith(
        dispatchSpy,
        sinon.match({
          type: ActionTypes.SetUiMessage,
          text: sinon.match('BarPlayer')
        })
    );
  });
});
