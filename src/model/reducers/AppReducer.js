import GameConfigReducer from './GameConfigReducer.js';
import UiStateReducer from './UiStateReducer.js';

function AppReducer(state, action) {
  return GameConfigReducer(UiStateReducer(state, action), action);
//  return {
//        mineBoard: state.mineBoard,
//        resourceSupply: ResourceSupplyReducer(state.resourceSupply, action),
//        hand: HandReducer(state, action)
//  }
}

export default AppReducer;
