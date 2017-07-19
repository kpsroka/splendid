import { connect } from 'react-redux';
import NewGameAction from '../../actions/NewGameAction.js';
import NewGameForm from '../react/welcome/NewGameForm.js';

function mapStateToProps() { return {}; }

function mapDispatchToProps(dispatch) {
  return {
    createNewGame: (playerName, playerCount) => {
      dispatch(NewGameAction(playerName, playerCount));
    },
  }
}

const NewGameComponent = connect(mapStateToProps, mapDispatchToProps)(NewGameForm);

export default NewGameComponent;
