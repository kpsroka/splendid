import HandReducer from './HandReducer';
import ResourceSupplyReducer from './ResourceSupplyReducer';

function AppReducer(state, action) {
    return {
        mineBoard: state.mineBoard,
        resourceSupply: ResourceSupplyReducer(state.resourceSupply, action),
        hand: HandReducer(state, action)
    }
}

export default AppReducer;
