/* const Actions = {
  ChooseResourceFromStack: (resourceType) => ({
    type: 'CHOOSE_STACK_RESOURCE',
    resourceType: resourceType
  }),
  ChooseMineFromBoard: (row, index) => ({
    type: 'CHOOSE_MINE',
    row: row,
    index: index
  }),
  GrabSelectedResources: () => ({
    type: 'GRAB_RESOURCES',
  }),
}
*/

export const ActionTypes = {
  ChooseFactoryFromBoard: 'CHOOSE_FACTORY',
  ChooseResourceFromStack: 'CHOOSE_STACK_RESOURCE',
  DismissMessage: 'DISMISS_MESSAGE',
  SetUiMessage: '_SET_UI_MESSAGE',
};
