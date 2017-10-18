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
import NewGameAction from '../../actions/async/NewGameAction.js';
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
