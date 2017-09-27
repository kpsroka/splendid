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

/*
 ResourceStack: {
 resourceType (string),
 size (integer),
 allowSelection (boolean)
 selectedCount (integer)
 }
 */

import { ActionTypes } from '../../actions/Actions.js';

const ResourceStackReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.ChooseResourceFromStack: {
      if (state.resourceType === action.resourceType) {
        return {
          ...state,
          selectedCount: state.allowSelection ? (state.selectedCount + 1) % (state.size + 1) : 0
        };
      } else {
        return state;
      }
    }
    case ActionTypes.GrabSelectedResources: {
      return {
        ...state,
        size: Math.max(0, state.size - state.selectedCount),
        selectedCount: 0
      }
    }
    default:
      return state;
  }
};

export default ResourceStackReducer;
