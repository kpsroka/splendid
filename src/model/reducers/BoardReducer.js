// @flow

import type { Resource, Board, Selection } from '../State.js';
import type { Action } from '../../actions/Actions.js';

import { ActionTypes } from '../../actions/Actions.js';

export default function BoardReducer(board:Board, action:Action):Board {
  if (action.type === ActionTypes.ChooseResourceFromStack) {
    let selection = board.selection;
    if (canSelectResource(selection, action.resourceType)) {
      let newBoardSelection: Array<Resource> =
          (selection.type === 'RESOURCE_SELECTION') ? selection.selection.slice() : [];

      if (countResources(newBoardSelection, action.resourceType) ===
          countResources(board.resources, action.resourceType)) {
        newBoardSelection = newBoardSelection.filter(x => x !== action.resourceType);
      } else {
        newBoardSelection.push(action.resourceType);
      }

      if (newBoardSelection.length === 0) {
        return {
          ...board,
          selection: { type: 'NO_SELECTION' }
        }
      } else {
        return {
          ...board,
          selection: {
            type: 'RESOURCE_SELECTION',
            selection: newBoardSelection
          }
        };
      }
    } else {
      return board;
    }
  }

  return board;
}

function canSelectResource(selection:Selection, resourceType:Resource) {
  if (selection.type === 'NO_SELECTION') {
    return true;
  } else if (selection.type === 'FACTORY_SELECTION') {
    return false;
  } else if (selection.type === 'RESOURCE_SELECTION') {
    let selectedResourceSet = new Set(selection.selection);
    return (selectedResourceSet.size === 0 || selectedResourceSet.size === 1 ||
        (selectedResourceSet.size === 2 && !selectedResourceSet.has(resourceType)) ||
        (selectedResourceSet.size === 3 && selectedResourceSet.has(resourceType)));
  }
}

function countResources(resourceArray:Array<Resource>, resourceType:Resource):number {
  return resourceArray.filter(x => x === resourceType).length;
}
