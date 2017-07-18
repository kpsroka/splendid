import {connect} from 'react-redux';
import Actions from '../../model/Actions';
import MineBoard from '../react/MineBoard';

function mapStateToProps(state) {
  return {mineBoard: state.mineBoard}
}

function mapDispatchToProps(dispatch) {
  return {
    onMineClick: (row, item) => dispatch(Actions.ChooseMineFromBoard(row, item))
  }
}

const MineBoardComponent = connect(mapStateToProps, mapDispatchToProps)(MineBoard);

export default MineBoardComponent;
