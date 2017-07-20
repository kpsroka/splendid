import { connect } from 'react-redux';
import MineBoard from '../react/MineBoard.js';
import ChooseFactoryFromBoardAction from '../../actions/ChooseFactoryFromBoardAction.js';

function mapStateToProps(state) {
  return { mineBoard: state.mineBoard };
}

function mapDispatchToProps(dispatch) {
  return {
    onMineClick: (row, item) => dispatch(ChooseFactoryFromBoardAction(row, item))
  };
}

const MineBoardComponent = connect(mapStateToProps, mapDispatchToProps)(MineBoard);

export default MineBoardComponent;
