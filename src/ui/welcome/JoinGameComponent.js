// @flow

import { connect } from 'react-redux';
import JoinGame from '../../actions/JoinGameAction.js';
import SetUiMode from '../../actions/SetUiModeAction.js';
import JoinGameForm from './JoinGameForm.js';

import type { JoinGameProps, JoinGameDispatch } from './JoinGameForm.js';

function mapStateToProps():JoinGameProps {
  return {
    initialGameId: location.hash.slice(1)
  };
}

function mapDispatchToProps(dispatch):JoinGameDispatch {
  return {
    joinGame: (playerName:string, gameRefId:string) => dispatch(JoinGame(playerName, gameRefId)),
    onAbort: () => dispatch(SetUiMode('WELCOME')),
  }
}

const JoinGameComponent = connect(mapStateToProps, mapDispatchToProps)(JoinGameForm);

export default JoinGameComponent;
