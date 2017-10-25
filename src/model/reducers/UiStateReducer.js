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

import type { Action } from '../../actions/Actions.js';
import { ActionTypes } from '../../actions/Actions.js';
import type { UiState } from '../State.js';

export default function UiStateReducer(ui:UiState, action:Action):UiState {
  switch (action.type) {
    case ActionTypes.SetUiMessage: {
      let newMessage = {
        text: action.text,
        severity: action.severity
      };

      return { ...ui, message: newMessage };
    }
    case ActionTypes.DismissMessage: {
      return { ...ui, message: null };
    }
    case ActionTypes.SetUiMode: {
      return { ...ui, mode: action.mode }
    }
    default:
      return ui;
  }
}
