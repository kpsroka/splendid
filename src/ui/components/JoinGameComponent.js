import { connect } from 'react-redux';
import JoinGameAction from '../../actions/JoinGameAction.js';
import JoinGameForm from '../react/welcome/JoinGameForm.js';

function mapStateToProps() { return {}; }

function mapDispatchToProps(dispatch) {
  return {
    joinGame: (playerName, gameRefId) => {
      dispatch(JoinGameAction(playerName, gameRefId));
    },
  }
}

const JoinGameComponent = connect(mapStateToProps, mapDispatchToProps)(JoinGameForm);

export default JoinGameComponent;
