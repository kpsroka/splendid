import ResourceSupplyReducer from './ResourceSupplyReducer';

function AppReducer(state, action) {
    return {
        mineBoard: state.mineBoard,
        resourceSupply: ResourceSupplyReducer(state.resourceSupply, action)
    }
}

export default AppReducer;
