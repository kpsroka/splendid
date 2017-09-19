import { connect } from 'react-redux';
import JoinGameAction from '../../actions/JoinGameAction.js';
import JoinGameForm from './JoinGameForm.js';

function mapStateToProps() {
  return {
    initialGameId: location.hash.slice(1)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    joinGame: (playerName, gameRefId) => {
      dispatch(JoinGameAction(playerName, gameRefId));
    },
  }
}

const JoinGameComponent = connect(mapStateToProps, mapDispatchToProps)(JoinGameForm);

export default JoinGameComponent;
