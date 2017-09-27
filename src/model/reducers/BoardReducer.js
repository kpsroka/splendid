/*
 * Copyright 2017 K. P. Sroka
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// @flow

import type { Resource, Board } from '../State.js';
import type { Action } from '../../actions/Actions.js';

import { ActionTypes } from '../../actions/Actions.js';

export default function BoardReducer(board:Board, action:Action):Board {
  if (action.type === ActionTypes.ChooseResourceFromStack) {
    return chooseResourceFromStack(board, action.resourceType);
  } else if (action.type === ActionTypes.ChooseFactoryFromBoard) {
    return chooseFactoryFromBoard(board, action.row, action.item);
  }

  return board;
}

function chooseResourceFromStack(board:Board, resourceType:number):Board {
  let selection = board.selection;
  if (selection.type === 'FACTORY_SELECTION' || selection.type === 'NO_SELECTION') {
    return {
      ...board,
      selection: {
        type: 'RESOURCE_SELECTION',
        selection: [resourceType]
      }
    }
  } else {
    let oldResourceCount = countResources(selection.selection, resourceType);
    let newResourceCount = getResourceCountAfterClick(
        countResources(board.resources, resourceType),
        oldResourceCount,
        selection.selection,
        resourceType);

    if (oldResourceCount === newResourceCount) {
      return board;
    }

    let newBoardSelection: Array<Resource> =
        selection.selection.filter(x => x !== resourceType);
    for (let i = 0; i < newResourceCount; i++) {
      newBoardSelection.push(resourceType);
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
      return (selectedResourcesOfType > 0 || selection.length === 1) ? (selectedResourcesOfType + 1) % 3 : 0;
    }
  }

  throw new Error("Should have exhausted all possibilities");
}

function chooseFactoryFromBoard(board:Board, row:number, item:number):Board {
  let selection = board.selection;
  if (selection.type === 'RESOURCE_SELECTION' || selection.type === 'NO_SELECTION') {
    return {
      ...board,
      selection: {
        type: 'FACTORY_SELECTION',
        row: row,
        item: item
      }
    }
  } else {
    if (board.selection.row === row && board.selection.item === item) {
      return {
        ...board,
        selection: {
          type: 'NO_SELECTION'
        }
      }
    } else {
      return {
        ...board,
        selection: {
          type: 'FACTORY_SELECTION',
          row: row,
          item: item
        }
      }
    }
  }
}
