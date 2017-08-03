import { connect } from 'react-redux';
import FactoryBoard from '../react/board/FactoryBoard.js';

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
      selection: boardState.selection.type === 'FACTORY_SELECTION' ? boardState.selection : null
    };
  }
}

const FactoryBoardComponent = connect(mapStateToProps)(FactoryBoard);

export default FactoryBoardComponent;
