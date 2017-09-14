import { connect } from 'react-redux';
import ResourcePanel from '../react/board/ResourcePanel.js';
import ChooseResourceFromStackAction from '../../actions/ChooseResourceFromStackAction.js';
import TakeSelectionAction from '../../actions/TakeSelectionAction.js';
import { ContainsResources, ReduceResources } from '../../model/ResourceHelper.js';

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

  let canTakeFactory = board.selection.type === 'FACTORY_SELECTION' &&
      canTakeFactoryFn(
          state.gameState.playerState[0].hand,
          board.factoriesByRow[board.selection.row][board.selection.item]);

  return {
    resources: resources,
    selection: selection,
    canTakeSelection: canTakeResources || canTakeFactory
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onStackClick: (resourceType) => dispatch(ChooseResourceFromStackAction(resourceType)),
    onTake: () => { dispatch(TakeSelectionAction())}
  }
}

function canTakeFactoryFn(playerHand, factory) {
  let totalResources =
      playerHand.resources.concat(playerHand.factories.map(f => f.color));
  return ContainsResources(totalResources, factory.cost);
}

const ResourcePanelComponent = connect(mapStateToProps, mapDispatchToProps)(ResourcePanel);

export default ResourcePanelComponent;
