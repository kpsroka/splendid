import { ActionTypes } from './Actions.js';

export default function SetGameState(serverGameState) {
  return {
    type: ActionTypes.SetGameState,
    gameState: serverGameState,
  };
}
