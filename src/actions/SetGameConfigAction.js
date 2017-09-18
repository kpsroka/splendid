import { ActionTypes } from './Actions.js';

export default function SetGameConfig(serverGameConfig) {
  return {
    type: ActionTypes.SetGameConfig,
    gameRef: serverGameConfig.ref,
    players: serverGameConfig.players,
  };
}
