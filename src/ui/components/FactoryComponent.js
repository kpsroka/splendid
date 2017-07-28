import { connect } from 'react-redux';
import Factory from '../react/Factory.js';
import RESOURCE_COLORS from '../ResourceColorMap.js';
import ChooseFactoryFromBoardAction from '../../actions/ChooseFactoryFromBoardAction.js';

function mapStateToProps(state, ownProps) {
  let boardState = state.gameState.board;
  let resourceFactory = boardState.factoriesByRow[ownProps.rowIndex][ownProps.itemIndex];

  let bgColor = RESOURCE_COLORS[resourceFactory.color];
  let costColors = resourceFactory.cost.sort().reduce(
      (combinedCost, nextCost) => {
        combinedCost[nextCost] = combinedCost.hasOwnProperty(nextCost) ? (combinedCost[nextCost] + 1) : 1;
        return combinedCost;
      },
      {});

  return {
    bgColor: bgColor,
    costColors: costColors,
    points: resourceFactory.points
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onFactoryClick: () => dispatch(ChooseFactoryFromBoardAction(ownProps.rowIndex, ownProps.itemIndex))
  }
}

const FactoryComponent = connect(mapStateToProps, mapDispatchToProps)(Factory);

export default FactoryComponent;
