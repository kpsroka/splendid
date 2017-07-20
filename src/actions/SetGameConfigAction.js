import { ActionTypes } from './Actions.js';

export default function SetGameConfigAction(serverGameConfig) {
  return {
    type: ActionTypes.SetGameConfig,
    players: serverGameConfig.players,
  };
}
