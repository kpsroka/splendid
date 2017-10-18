/*
 * Copyright 2017 K. P. Sroka
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// @flow

import { connect } from 'react-redux';
import JoinGame from '../../actions/async/JoinGameAction.js';
import SetUiMode from '../../actions/SetUiModeAction.js';
import JoinGameForm from './JoinGameForm.js';

import type { JoinGameProps, JoinGameDispatch } from './JoinGameForm.js';

function mapStateToProps():JoinGameProps {
  return {
    initialGameId: window.location.hash.slice(1)
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
