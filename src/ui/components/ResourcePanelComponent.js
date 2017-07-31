import { connect } from 'react-redux';
import ResourcePanel from '../react/board/ResourcePanel.js';
import ChooseResourceFromStackAction from '../../actions/ChooseResourceFromStackAction.js';

function mapStateToProps(state) {
  if (!state.gameState) {
    return { resources: {}, selection: {} }
  }

  let resources = state.gameState.board.resources.sort().reduce(reduceResources, {});
  let selection = Array.isArray(state.gameState.board.selection)
      ? state.gameState.board.selection.sort().reduce(reduceResources, {})
      : {};

  return { resources: resources, selection: selection };
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
