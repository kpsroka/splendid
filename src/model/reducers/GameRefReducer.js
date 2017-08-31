import { ActionTypes } from '../../actions/Actions.js';

export default function GameRefReducer(gameRef, action) {
  if (action.type === ActionTypes.SetGameConfig) {
    if (gameRef === null) {
      return action.gameRef;
    }
  }

  return gameRef;
}
