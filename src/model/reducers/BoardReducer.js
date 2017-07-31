import { ActionTypes } from '../../actions/Actions.js';

export default function BoardReducer(board, action) {
  switch (action.type) {
    case ActionTypes.ChooseResourceFromStack: {
      if (Array.isArray(board.selection) || board.selection == null) {
        if (canSelectResource(board.selection, action.resourceType)) {
          let newBoardSelection = (board.selection || []).splice();
          if (countResources(newBoardSelection, action.resourceType) ===
              countResources(board.resources, action.resourceType)) {
            newBoardSelection = newBoardSelection.filter(x => x !== action.resourceType);
          } else {
            newBoardSelection.push(action.resourceType);
          }
          return { ...board, selection: newBoardSelection };
        }
      }
      return board;
    }
    default:
      return board;
  }
}

function canSelectResource(stackSelection, resourceType) {
  let selectedResourceSet = new Set(stackSelection);
  return (selectedResourceSet.size === 0 || selectedResourceSet.size === 1 ||
      (selectedResourceSet.size === 2 && !selectedResourceSet.has(resourceType)) ||
      (selectedResourceSet.size === 3 && selectedResourceSet.has(resourceType)));
}

function countResources(resourceArray, resourceType) {
  return resourceArray.filter(x => x === resourceType).length;
}
