// @flow

import type { State } from "./State";

function createDefaultState():State {
  return {
    players: [],
    gameState: null,
    gameRef: null,
    ui: {
      asyncInProgress: false,
      message: null
    }
  };
}

const DefaultState: State = createDefaultState();

export default DefaultState;
