import { ActionTypes } from './Actions.js';

export default function SetGameConfig(serverGameConfig) {
  return {
    type: ActionTypes.SetGameConfig,
    players: serverGameConfig.players,
  };
}
