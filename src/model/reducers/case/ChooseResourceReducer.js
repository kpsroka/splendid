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

import type { Resource, Selection } from '../../State';
import type { ChooseResourceFromStack } from '../../../actions/Actions';

function countResources(resourceArray:Array<Resource>, resourceType:Resource):number {
  return resourceArray.filter(x => x === resourceType).length;
}

function getResourceCountAfterClick(
    availableResourcesOfType:number,
    selectedResourcesOfType:number,
    selection:Array<Resource>,
    resourceType:Resource
):number {
  if (availableResourcesOfType === 0) {
    return 0;
  } else if (selectedResourcesOfType === availableResourcesOfType) {
    return 0;
  } else if (selection.length === 0) {
    return 1;
  } else {
    const selectedResourceTypes = new Set(selection);
    if (selectedResourceTypes.size === 3) {
      return 0;
    } else if (selectedResourceTypes.size === 2) {
      return selectedResourceTypes.has(resourceType) ? 0 : 1;
    } else if (selectedResourceTypes.size === 1) {
      return (selectedResourcesOfType > 0 || selection.length === 1) ? (selectedResourcesOfType + 1) % 3 : 0;
    }
  }

  throw new Error('Should have exhausted all possibilities');
}

export default function ChooseResourceReducer(
    selection:Selection,
    action:ChooseResourceFromStack,
    boardResources:Array<Resource>
):Selection {
  const { resourceType } = action;

  if (selection.type === 'FACTORY_SELECTION' || selection.type === 'NO_SELECTION') {
    return {
      type: 'RESOURCE_SELECTION',
      selection: [resourceType]
    };
  } else {
    const oldResourceCount = countResources(selection.selection, resourceType);
    const newResourceCount = getResourceCountAfterClick(
        countResources(boardResources, resourceType),
        oldResourceCount,
        selection.selection,
        resourceType
    );

    if (oldResourceCount === newResourceCount) {
      return selection;
    }

    const newBoardSelection: Array<Resource> =
        selection.selection.filter(x => x !== resourceType);
    for (let i = 0; i < newResourceCount; i++) {
      newBoardSelection.push(resourceType);
    }

    if (newBoardSelection.length === 0) {
      return { type: 'NO_SELECTION' };
    } else {
      return {
        type: 'RESOURCE_SELECTION',
        selection: newBoardSelection
      };
    }
  }
}
