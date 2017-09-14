import { connect } from 'react-redux';
import Factory from './Factory.js';
import RESOURCE_COLORS from '../ResourceColorMap.js';
import ChooseFactoryFromBoardAction from '../../actions/ChooseFactoryFromBoardAction.js';
import { ReduceResources } from '../../model/ResourceHelper.js';

function mapStateToProps(state, ownProps) {
  let boardState = state.gameState.board;
  let resourceFactory = boardState.factoriesByRow[ownProps.rowIndex][ownProps.itemIndex];

  let bgColor = RESOURCE_COLORS[resourceFactory.color];
  let costColors = ReduceResources(resourceFactory.cost);

  let selection = boardState.selection.type === 'FACTORY_SELECTION' ? boardState.selection : null;

  return {
    bgColor: bgColor,
    costColors: costColors,
    points: resourceFactory.points,
    selected: selection !== null &&
        selection.row === ownProps.rowIndex &&
        selection.item === ownProps.itemIndex
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onFactoryClick: () => dispatch(ChooseFactoryFromBoardAction(ownProps.rowIndex, ownProps.itemIndex))
  }
}

const FactoryComponent = connect(mapStateToProps, mapDispatchToProps)(Factory);

export default FactoryComponent;
