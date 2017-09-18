// @flow

import type { State } from "./State";

function createDefaultState():State {
  return {
    players: [],
    gameState: null,
    gameRef: null,
    ui: {
      asyncInProgress: false,
      message: null,
      mode: 'INIT'
    }
  };
}

const DefaultState: State = createDefaultState();

export default DefaultState;
