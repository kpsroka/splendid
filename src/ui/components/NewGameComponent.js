import { connect } from 'react-redux';
import Actions from '../../actions/Actions.js';
import NewGameForm from '../react/welcome/NewGameForm.js';

function mapStateToProps() { return {}; }

function mapDispatchToProps(dispatch) {
  return {
    createNewGame: (playerName, playerCount) => {
      dispatch(Actions.NewGame(playerName, playerCount));
    },
  }
}

const NewGameComponent = connect(mapStateToProps, mapDispatchToProps)(NewGameForm);

export default NewGameComponent;
