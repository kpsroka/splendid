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
 ResourceSupply = {
 locked (boolean),
 stacks (array of ResourceStack)
 }
 */

import ResourceStackReducer from './ResourceStackReducer';

const ResourceSupplyReducer = (state, action) => {
  if (state.locked) {
    return state;
  }

  return {
    ...state,
    stacks: updateAllowStackSelection(state.stacks.map(stack => ResourceStackReducer(stack, action)))
  }
};

function updateAllowStackSelection(stacks = []) {
  let selectedResourceStacks = stacks.filter(stack => (stack.selectedCount > 0));
  let totalSelectedResources =
      selectedResourceStacks.reduce(
          (accumulator, stack) => (accumulator + stack.selectedCount),
          /* initialValue */ 0);

  let allowSelectionUpdateFn;
  if (selectedResourceStacks.length === 0) {
    allowSelectionUpdateFn = (_) => (true);
  } else if (selectedResourceStacks.length === 1) {
    allowSelectionUpdateFn = (_) => (totalSelectedResources < 2);
  } else if (selectedResourceStacks.length === 2) {
    allowSelectionUpdateFn = (stack) => (!selectedResourceStacks.includes(stack));
  } else {
    allowSelectionUpdateFn = (_) => (false);
  }

  return stacks.map(stack => ({
    ...stack,
    allowSelection: allowSelectionUpdateFn(stack)
  }));
}

export default ResourceSupplyReducer;
