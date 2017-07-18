import { connect } from 'react-redux';
import { NEW_GAME_ACTION_TYPE } from '../../actions/NewGameAction.js';
import NewGameForm from '../react/welcome/NewGameForm.js';

function mapStateToProps() { return {}; }

function mapDispatchToProps(dispatch) {
  return {
    createNewGame: (playerName, playerCount) => dispatch({
      type: NEW_GAME_ACTION_TYPE,
      playerName: playerName,
      playerCount: playerCount
    }),
  }
}

const NewGameComponent = connect(mapStateToProps, mapDispatchToProps)(NewGameForm);

export default NewGameComponent;
