/*
ResourceSupply = {
    locked (boolean),
    stacks (array of ResourceStack)
}
*/

import ResourceStackReducer from './ResourceStackReducer';

const ResourceSupplyReducer = (state, action) => {
    if (state.locked) {
        return state;
    }

    return {
        ...state,
        stacks: state.stacks.map(stack => ResourceStackReducer(stack, action))
    }
};

export default ResourceSupplyReducer;
