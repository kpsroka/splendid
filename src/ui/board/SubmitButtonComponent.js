import { connect } from 'react-redux';
import SubmitButton from './SubmitButton.js';
import TakeSelectionAction from '../../actions/TakeSelectionAction.js';
import { ContainsResources, ReduceResources } from '../../model/ResourceHelper.js';

function mapStateToProps(state) {
  return {
    text: "Take",
    active: canTakeResources(state) || canTakeFactory(state),
    styleName: "",
  }
}

function canTakeResources(state) {
  if (!state.gameState) {
    return false;
  }

  let board = state.gameState.board;
  let selection = board.selection.type === 'RESOURCE_SELECTION'
      ? ReduceResources(board.selection.selection)
      : {};

  return board.selection.type === 'RESOURCE_SELECTION' &&
      (board.selection.selection.length === 3 ||
      (board.selection.selection.length === 2 && Object.getOwnPropertyNames(selection).length === 1));
}

function canTakeFactory(state) {
  if (!state.gameState) {
    return false;
  }

  let board = state.gameState.board;
  let selection = board.selection;

  if (selection.type === 'FACTORY_SELECTION') {
    let playerHand = state.gameState.playerState[0].hand;
    let factory = board.factoriesByRow[selection.row][selection.item];

    let totalResources =
        playerHand.resources.concat(playerHand.factories.map(f => f.color));
    return ContainsResources(totalResources, factory.cost);
  }

  return false;
}


function mapDispatchToProps(dispatch) {
  return {
    onClick: () => dispatch(TakeSelectionAction())
  }
}

const SubmitButtonComponent = connect(mapStateToProps, mapDispatchToProps)(SubmitButton);

export default SubmitButtonComponent;
