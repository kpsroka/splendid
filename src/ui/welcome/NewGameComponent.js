// @flow

import { connect } from 'react-redux';
import NewGameAction from '../../actions/NewGameAction.js';
import SetUiMode from '../../actions/SetUiModeAction.js';
import NewGameForm from './NewGameForm.js';

import type { NewGameDispatch } from './NewGameForm.js';

// Due to a bug in flow, we cannot use the {||} type to denote empty object type.
// See: https://github.com/facebook/flow/issues/2977
function mapStateToProps() { return {}; }

function mapDispatchToProps(dispatch):NewGameDispatch {
  return {
    createNewGame: (playerName:string, playerCount:number) => dispatch(NewGameAction(playerName, playerCount)),
    onAbort: () => dispatch(SetUiMode('WELCOME')),
  }
}

const NewGameComponent = connect(mapStateToProps, mapDispatchToProps)(NewGameForm);

export default NewGameComponent;
