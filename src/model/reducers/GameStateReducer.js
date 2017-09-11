import BoardReducer from './BoardReducer.js';
import { ActionTypes } from '../../actions/Actions.js';

export default function GameStateReducer(gameState, action) {
  switch (action.type) {
    case ActionTypes.SetGameState: {
      return action.gameState;
    }
    case ActionTypes.ChooseResourceFromStack: {
      if (gameState.currentPlayerIndex === 0) {
        return {...gameState, board: BoardReducer(gameState.board, action)};
      } else {
        return gameState;
      }
    }
    default: return gameState;
  }
}
