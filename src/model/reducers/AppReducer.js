import ResourceSupplyReducer from './ResourceSupplyReducer';

const AppReducer = (state, action) => ({
    ...state,
    resourceSupply: ResourceSupplyReducer(state.resourceSupply, action)
});

export default AppReducer;
