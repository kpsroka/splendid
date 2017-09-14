import { connect } from 'react-redux';
import SubmitButton from './SubmitButton.js';
import GrabSelectedResourcesAction from '../actions/GrabSelectedResourcesAction.js';

function mapStateToProps(state) {
  return {
    active: Boolean(canGrabResources(state))
  }
}

function canGrabResources(state) {
  let stacks = state.resourceSupply.stacks;
  let selectedResourceStacks = stacks.filter(stack => (stack.selectedCount > 0));
  let totalSelectedResources = stacks.reduce(
      (accumulator, stack) => (accumulator + stack.selectedCount),
      /* initialValue */ 0);

  return (selectedResourceStacks.length === 1 && totalSelectedResources === 2)
      || (selectedResourceStacks.length === 3);
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => dispatch(GrabSelectedResourcesAction())
  }
}

const SubmitButtonComponent = connect(mapStateToProps, mapDispatchToProps)(SubmitButton);

export default SubmitButtonComponent;