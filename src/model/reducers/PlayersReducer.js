import { ActionTypes } from '../../actions/Actions.js';

export default function PlayersReducer(players, action) {
  switch (action.type) {
    case ActionTypes.SetGameConfig: {
      return action.players.map((player) => ({ ...player, hand: [] }));
    }
    default: return players;
  }
}
