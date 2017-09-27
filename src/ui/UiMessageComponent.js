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
import DismissMessageAction from '../actions/DismissMessageAction.js';
import UiMessage from './UiMessage.js';

import type { UiMessageProps, UiMessageDispatch } from './UiMessage.js';
import type { State } from '../model/State.js';

function mapStateToProps(state:State):UiMessageProps {
  return {
    message: state.ui.message
  };
}

function mapDispatchToProps(dispatch):UiMessageDispatch {
  return {
    onDismissMessage: () => dispatch(DismissMessageAction())
  };
}

const UiMessageComponent = connect(mapStateToProps, mapDispatchToProps)(UiMessage);

export default UiMessageComponent;
