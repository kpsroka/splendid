import { ActionTypes } from '../../actions/Actions.js';

export default function GameStateReducer(gameState, action) {
  switch (action.type) {
    case ActionTypes.SetGameState: {
      return action.gameState;
    }
    default: return gameState;
  }
}
