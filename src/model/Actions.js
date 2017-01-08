const Actions = {
    ChooseResourceFromStack: (resourceType) => ({
        type: "CHOOSE_STACK_RESOURCE",
        resourceType: resourceType
    })
};

export default Actions;
