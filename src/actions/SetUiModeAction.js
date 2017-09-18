// @flow

import { ActionTypes } from './Actions.js';
import type { UiMode } from '../model/State.js';

export default function SetUiMode(mode:UiMode) {
  return {
    type: ActionTypes.SetUiMode,
    mode: mode,
  };
}
