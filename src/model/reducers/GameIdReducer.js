import { ActionTypes } from '../../actions/Actions.js';

export default function GameIdReducer(gameIdRef, action) {
  if (action.type === ActionTypes.SetGameConfig) {
    if (gameIdRef === null) {
      return action.gameId;
    }
  }

  return gameIdRef;
}

