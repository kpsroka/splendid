const Actions = {
  ChooseResourceFromStack: (resourceType) => ({
    type: "CHOOSE_STACK_RESOURCE",
    resourceType: resourceType
  }),
  ChooseMineFromBoard: (row, index) => ({
    type: "CHOOSE_MINE",
    row: row,
    index: index
  }),
  GrabSelectedResources: () => ({
    type: "GRAB_RESOURCES",
  })
};

export default Actions;
