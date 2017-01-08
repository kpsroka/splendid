/*
ResourceStack: {
    resourceType (string),
    size (integer),
    selectLimit (integer),
    selectedCount (integer)
}
*/

const ResourceStackReducer = (state, action) => {
    switch (action.type) {
        case "CHOOSE_STACK_RESOURCE": {
            if (state.resourceType === action.resourceType) {
                return {
                    ...state,
                    selectedCount: (state.selectedCount + 1) % (state.selectLimit + 1)
                };
            } else {
                return state;
            }
        }
        default: return state;
    }
};

export default ResourceStackReducer;
