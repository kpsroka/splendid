import { connect } from 'react-redux';
import ResourcePanel from '../react/board/ResourcePanel.js';
import ChooseResourceFromStackAction from '../../actions/ChooseResourceFromStackAction.js';

function mapStateToProps(state) {
  if (!state.gameState) {
    return { resources: {}, selection: {}, canTakeResources: false }
  }

  let board = state.gameState.board;
  let resources = board.resources.sort().reduce(reduceResources, {});
  let selection = board.selection.type === 'RESOURCE_SELECTION'
      ? board.selection.selection.sort().reduce(reduceResources, {})
      : {};

  let canTakeResources = (board.selection.length === 3 ||
      (board.selection.length === 2 && Object.getOwnPropertyNames(selection).length === 1));

  return { resources: resources, selection: selection, canTakeResources: canTakeResources };
}

function mapDispatchToProps(dispatch) {
  return {
    onStackClick: (resourceType) => dispatch(ChooseResourceFromStackAction(resourceType))
  }
}

function reduceResources(reduced, resource) {
  reduced[resource] = reduced.hasOwnProperty(resource) ? (reduced[resource] + 1) : 1;
  return reduced;
}

const ResourcePanelComponent = connect(mapStateToProps, mapDispatchToProps)(ResourcePanel);

export default ResourcePanelComponent;
