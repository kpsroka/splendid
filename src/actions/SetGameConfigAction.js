import { ActionTypes } from './Actions.js';

export default function SetGameConfig(serverGameConfig) {
  return {
    type: ActionTypes.SetGameConfig,
    gameId: serverGameConfig.ref.id,
    players: serverGameConfig.players,
  };
}
