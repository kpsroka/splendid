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
};

export default ResourceSupplyReducer;
