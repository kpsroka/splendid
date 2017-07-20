import { connect } from 'react-redux';
import FactoryBoard from '../react/FactoryBoard.js';
import ChooseFactoryFromBoardAction from '../../actions/ChooseFactoryFromBoardAction.js';

function isFactorySelection(selection) {
  return selection && !(selection instanceof 'array');
}

function mapStateToProps(state) {
  if (!state.board) {
    return {};
  } else {
    return {
      factoriesByRow: state.board.factoriesByRow,
      selection: isFactorySelection(state.board.selection) ? state.board.selection : null
    };
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onFactoryClick: (row, item) => dispatch(ChooseFactoryFromBoardAction(row, item))
  };
}

const FactoryBoardComponent = connect(mapStateToProps, mapDispatchToProps)(FactoryBoard);

export default FactoryBoardComponent;
