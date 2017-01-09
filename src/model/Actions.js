const Actions = {
    ChooseResourceFromStack: (resourceType) => ({
        type: "CHOOSE_STACK_RESOURCE",
        resourceType: resourceType
    }),
    ChooseMineFromBoard: (row, index) => ({
        type: "CHOOSE_MINE",
        row: row,
        index: index
    })
};

export default Actions;
