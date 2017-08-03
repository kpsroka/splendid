// @flow

import type { Resource, Board } from '../State.js';
import type { Action } from '../../actions/Actions.js';

import { ActionTypes } from '../../actions/Actions.js';

export default function BoardReducer(board:Board, action:Action):Board {
  if (action.type === ActionTypes.ChooseResourceFromStack) {
    let selection = board.selection;
    if (selection.type === 'FACTORY_SELECTION') {
      return board;
    } else if (selection.type === 'NO_SELECTION') {
      return {
        ...board,
        selection: {
          type: 'RESOURCE_SELECTION',
          selection: [action.resourceType]
        }
      }
    } else {
      let oldResourceCount = countResources(selection.selection, action.resourceType);
      let newResourceCount = getResourceCountAfterClick(
          countResources(board.resources, action.resourceType),
          oldResourceCount,
          selection.selection,
          action.resourceType);

      if (oldResourceCount === newResourceCount) {
        return board;
      }

      let newBoardSelection: Array<Resource> =
          selection.selection.filter(x => x !== action.resourceType);
      for (let i = 0; i < newResourceCount; i++) {
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
    }
  }

  return board;
}

function countResources(resourceArray:Array<Resource>, resourceType:Resource):number {
  return resourceArray.filter(x => x === resourceType).length;
}

function getResourceCountAfterClick(
    availableResourcesOfType:number,
    selectedResourcesOfType:number,
    selection:Array<Resource>,
    resourceType:Resource):number {
  if (availableResourcesOfType === 0) {
    return 0;
  } else if (selectedResourcesOfType === availableResourcesOfType) {
    return 0;
  } else if (selection.length === 0) {
    return 1;
  } else {
    let selectedResourceTypes = new Set(selection);
    if (selectedResourceTypes.size === 3) {
      return 0;
    } else if (selectedResourceTypes.size === 2) {
      return selectedResourceTypes.has(resourceType) ? 0 : 1;
    } else if (selectedResourceTypes.size === 1) {
      return (selectedResourcesOfType > 0 || selection.length === 1) ? (selectedResourcesOfType + 1) % 4 : 0;
    }
  }

  throw new Error("Should have exhausted all possibilities");
}
