import { connect } from 'react-redux';
import Factory from '../react/Factory.js';
import RESOURCE_COLORS from '../ResourceColorMap.js';

function mapStateToProps(state, ownProps) {
  let boardState = state.gameState.board;
  let resourceFactory = boardState.factoriesByRow[ownProps.rowIndex][ownProps.itemIndex];

  let bgColor = RESOURCE_COLORS[resourceFactory.color];
  let costColors = resourceFactory.cost.sort().reduce(
      (combinedCost, nextCost) => {
        if (combinedCost.hasOwnProperty(nextCost)) {
          combinedCost[nextCost]++;
        } else {
          combinedCost[nextCost] = 1;
        }
        return combinedCost;
      },
      {});

  console.log(costColors);

  return {
    bgColor: bgColor,
    costColors: costColors,
    points: resourceFactory.points
  }
}

const FactoryComponent = connect(mapStateToProps)(Factory);

export default FactoryComponent;
