import { connect } from 'react-redux';
import ResourcePanel from './ResourcePanel.js';
import ChooseResourceFromStackAction from '../../actions/ChooseResourceFromStackAction.js';
import { ReduceResources } from '../../model/ResourceHelper.js';

function mapStateToProps(state) {
  if (!state.gameState) {
    return { resources: {}, selection: {}, canTakeResources: false }
  }

  let board = state.gameState.board;
  let resources = ReduceResources(board.resources);
  let selection = board.selection.type === 'RESOURCE_SELECTION'
      ? ReduceResources(board.selection.selection)
      : {};

  return {
    resources: resources,
    selection: selection,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onStackClick: (resourceType) => dispatch(ChooseResourceFromStackAction(resourceType)),
  }
}

const ResourcePanelComponent = connect(mapStateToProps, mapDispatchToProps)(ResourcePanel);

export default ResourcePanelComponent;
