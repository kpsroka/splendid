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
import PlayField from './PlayField';
import type { PlayFieldProps } from './PlayField';
import type { State } from '../../model/State';

function mapStateToProps(state:State):PlayFieldProps {
  if (state.players.length === 2) {
    return { left: [1], right: [] };
  } else if (state.players.length === 3) {
    return { left: [1], right: [2] };
  } else if (state.players.length === 4) {
    return { left: [2, 1], right: [3] };
  } else {
    return { left: [2, 1], right: [3, 4] };
  }
}

const PlayFieldComponent = connect(mapStateToProps)(PlayField);

export default PlayFieldComponent;
