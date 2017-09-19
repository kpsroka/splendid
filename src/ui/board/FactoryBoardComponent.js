// @flow

import { connect } from 'react-redux';
import FactoryBoard from './FactoryBoard.js';

import type { FactoryBoardProps } from './FactoryBoard.js';
import type { State } from '../../model/State.js';

function mapStateToProps(state:State):FactoryBoardProps {
  if (!state.gameState) {
    return {
      factoriesByRow: []
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
