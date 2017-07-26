import { connect } from 'react-redux';
import FactoryBoard from '../react/FactoryBoard.js';

function isFactorySelection(selection) {
  return selection && !(selection instanceof 'array');
}

function mapStateToProps(state) {
  if (!state.gameState) {
    return {
      factoriesByRow: [],
      selection: null
    };
  } else {
    let boardState = state.gameState.board;
    return {
      factoriesByRow: boardState.factoriesByRow,
      selection: isFactorySelection(boardState.selection) ? boardState.selection : null
    };
  }
}

const FactoryBoardComponent = connect(mapStateToProps)(FactoryBoard);

export default FactoryBoardComponent;
