import { connect } from 'react-redux';
import FactoryBoard from './FactoryBoard.js';

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
    };
  }
}

const FactoryBoardComponent = connect(mapStateToProps)(FactoryBoard);

export default FactoryBoardComponent;
