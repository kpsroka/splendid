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
import ResourceBox from './ResourceBox';
import type { ResourceBoxOwnProps, ResourceBoxProps } from './ResourceBox';
import type { State } from '../../model/State';

function mapStateToProps(state:State, ownProps:ResourceBoxOwnProps):ResourceBoxProps {
  if (!state.gameState) {
    throw Error('No board state present.');
  }

  const playerHand = state.gameState.playerState[0].hand;
  const resourceAvailable =
      playerHand.factories.reduce((acc, next) => ((next.color === ownProps.resource) ? acc + 1 : acc), 0)
      + playerHand.resources.filter(resource => resource === ownProps.resource).length;

  return { available: resourceAvailable >= ownProps.count };
}

const ResourceBoxComponent = connect(mapStateToProps)(ResourceBox);

export default ResourceBoxComponent;
