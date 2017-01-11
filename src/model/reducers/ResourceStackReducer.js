/*
ResourceStack: {
    resourceType (string),
    size (integer),
    allowSelection (boolean)
    selectedCount (integer)
}
*/

const ResourceStackReducer = (state, action) => {
    switch (action.type) {
        case "CHOOSE_STACK_RESOURCE": {
            if (state.resourceType === action.resourceType) {
                return {
                    ...state,
                    selectedCount: state.allowSelection ? (state.selectedCount + 1) % (state.size + 1) : 0
                };
            } else {
                return state;
            }
        }
        case "GRAB_RESOURCES": {
            return {
                ...state,
                size: Math.max(0, state.size - state.selectedCount),
                selectedCount: 0
            }
        }
        default: return state;
    }
};

export default ResourceStackReducer;
