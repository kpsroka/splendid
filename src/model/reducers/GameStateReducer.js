import { ActionTypes } from '../../actions/Actions.js';

export default function GameStateReducer(state, action) {
  switch (action.type) {
    case ActionTypes.SetGameState: {
      return { ...state, gameState: action.gameState };
    }
    default: return state;
  }
}
