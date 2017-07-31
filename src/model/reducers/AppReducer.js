import PlayersReducer from './PlayersReducer.js';
import GameStateReducer from './GameStateReducer.js';
import UiStateReducer from './UiStateReducer.js';

function AppReducer(state, action) {
  return {
    ...state,
    players: PlayersReducer(state.players, action),
    ui: UiStateReducer(state.ui, action),
    gameState: GameStateReducer(state.gameState, action),
  };
}

export default AppReducer;
