import ResourceSupplyReducer from './ResourceSupplyReducer';

const AppReducer = (state, action) => ({
    resourceSupply: ResourceSupplyReducer(state.resourceSupply, action)
});

export default AppReducer;
