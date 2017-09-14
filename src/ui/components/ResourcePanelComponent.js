import { connect } from 'react-redux';
import ResourcePanel from '../react/board/ResourcePanel.js';
import ChooseResourceFromStackAction from '../../actions/ChooseResourceFromStackAction.js';
import TakeSelectionAction from '../../actions/TakeSelectionAction.js';
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

  let canTakeResources = board.selection.type === 'RESOURCE_SELECTION' &&
      (board.selection.selection.length === 3 ||
      (board.selection.selection.length === 2 && Object.getOwnPropertyNames(selection).length === 1));

  return {
    resources: resources,
    selection: selection,
    canTakeSelection: canTakeResources
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onStackClick: (resourceType) => dispatch(ChooseResourceFromStackAction(resourceType)),
    onTake: () => { dispatch(TakeSelectionAction())}
  }
}

const ResourcePanelComponent = connect(mapStateToProps, mapDispatchToProps)(ResourcePanel);

export default ResourcePanelComponent;
