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

import { ActionTypes } from '../../actions/Actions.js';

const HandReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.GrabSelectedResources: {
      return {
        ...state.hand,
        resources: combineResources(state.hand.resources, getSelectedResources(state.resourceSupply))
      }
    }
    default: {
      return state.hand;
    }
  }
};

function combineResources(...resourceMaps) {
  let accumulator = new Map();
  resourceMaps.forEach((resourceMap) => {
    resourceMap.forEach((size, resourceType) => {
      accumulator.set(resourceType, (accumulator.get(resourceType) || 0) + size);
    });
  });
  return accumulator;
}

function getSelectedResources(resourceSupply) {
  return new Map(resourceSupply.stacks.map((stack) => ([stack.resourceType, stack.selectedCount])));
}

export default HandReducer;
