import GameConfigReducer from './GameConfigReducer.js';
import GameStateReducer from './GameStateReducer.js';
import UiStateReducer from './UiStateReducer.js';

function AppReducer(state, action) {
  return (
      GameStateReducer(
          GameConfigReducer(
              UiStateReducer(state, action),
              action),
          action));
//  return {
//        mineBoard: state.mineBoard,
//        resourceSupply: ResourceSupplyReducer(state.resourceSupply, action),
//        hand: HandReducer(state, action)
//  }
}

export default AppReducer;
