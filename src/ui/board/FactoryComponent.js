// @flow

import { connect } from 'react-redux';
import Factory from './Factory.js';
import ChooseFactoryFromBoardAction from '../../actions/ChooseFactoryFromBoardAction.js';
import { ReduceResources } from '../../model/ResourceHelper.js';

import type { FactoryProps, FactoryOwnProps, FactoryDispatch } from './Factory.js';
import type { State } from '../../model/State.js';

function mapStateToProps(state:State, ownProps:FactoryOwnProps):FactoryProps {
  if (!state.gameState) {
    throw Error("No board state present.");
  }

  let boardState = state.gameState.board;
  let resourceFactory = boardState.factoriesByRow[ownProps.rowIndex][ownProps.itemIndex];

  let costColors = ReduceResources(resourceFactory.cost);

  let selection = boardState.selection.type === 'FACTORY_SELECTION' ? boardState.selection : null;

  return {
    resource: resourceFactory.color,
    costColors: costColors,
    points: resourceFactory.points,
    selected: selection !== null &&
        selection.row === ownProps.rowIndex &&
        selection.item === ownProps.itemIndex
  }
}

function mapDispatchToProps(dispatch, ownProps:FactoryOwnProps):FactoryDispatch {
  return {
    onFactoryClick: () =>
        dispatch(ChooseFactoryFromBoardAction(ownProps.rowIndex, ownProps.itemIndex))
  }
}

const FactoryComponent = connect(mapStateToProps, mapDispatchToProps)(Factory);

export default FactoryComponent;
