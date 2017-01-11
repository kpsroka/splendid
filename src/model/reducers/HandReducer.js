const HandReducer = (state, action) => {
    switch (action.type) {
        case "GRAB_RESOURCES": {
            return {
                ...state.hand,
                resources: combineResources(state.hand.resources, getSelectedResources(state.resourceSupply))
            }
        }
        default: { return state.hand; }
    }
};

function combineResources(...resourceMaps) {
    let accumulator = new Map();
    resourceMaps.forEach((resourceMap) => {
        resourceMap.forEach((size, resourceType) => {
            accumulator.set(resourceType, (accumulator.get(resourceType) || 0) + size);
        });
    });
    return accumulator;
}

function getSelectedResources(resourceSupply) {
    return new Map(resourceSupply.stacks.map((stack) => ([stack.resourceType, stack.selectedCount])));
}

export default HandReducer;
