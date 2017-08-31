import GameIdReducer from './GameIdReducer.js';
import GameRefReducer from './GameRefReducer.js';
import GameStateReducer from './GameStateReducer.js';
import PlayersReducer from './PlayersReducer.js';
import UiStateReducer from './UiStateReducer.js';

function AppReducer(state, action) {
  return {
    ...state,
    gameId: GameIdReducer(state.gameId, action),
    gameRef: GameRefReducer(state.gameRef, action),
    players: PlayersReducer(state.players, action),
    ui: UiStateReducer(state.ui, action),
    gameState: GameStateReducer(state.gameState, action),
  };
}

export default AppReducer;
