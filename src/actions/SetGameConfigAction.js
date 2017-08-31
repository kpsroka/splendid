import { ActionTypes } from './Actions.js';

export default function SetGameConfig(serverGameConfig) {
  return {
    type: ActionTypes.SetGameConfig,
    gameRef: serverGameConfig.ref,
    gameId: serverGameConfig.ref.gameId,
    players: serverGameConfig.players,
  };
}
