import UiStateReducer from './UiStateReducer.js';

function AppReducer(state, action) {
  return UiStateReducer(state, action);
//  return {
//        mineBoard: state.mineBoard,
//        resourceSupply: ResourceSupplyReducer(state.resourceSupply, action),
//        hand: HandReducer(state, action)
//  }
}

export default AppReducer;
