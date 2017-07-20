import { ActionTypes } from '../../actions/Actions.js';

export default function GameConfigReducer(state, action) {
  switch (action.type) {
    case ActionTypes.SetGameConfig: {
      let newPlayers = action.players.map((player) => ({ ...player, hand: [] }));
      return { ...state, players: newPlayers };
    }
    default: return state;
  }
}
