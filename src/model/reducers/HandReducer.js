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

function combineResources(...resourceArrays) {
    let accumulator = new Map();
    resourceArrays.forEach((resourceArray) => {
        resourceArray.forEach((resource) => {
            accumulator.set(resource.resourceType, (accumulator.get(resource.resourceType) || 0) + resource.size);
        });
    });

    return Array.from(accumulator, ([key, value]) => ({ resourceType: key, size: value }));
}

function getSelectedResources(resourceSupply) {
    return resourceSupply.stacks.map((stack) => ({
        resourceType: stack.resourceType,
        size: stack.selectedCount
    }));
}

export default HandReducer;
