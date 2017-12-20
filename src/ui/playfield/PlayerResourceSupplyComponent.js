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
import PlayerResourceSupply from './PlayerResourceSupply';
import type { PlayerResourceSupplyProps, PlayerResourceSupplyOwnProps } from './PlayerResourceSupply';
import type { State } from '../../model/State';

function mapStateToProps(state:State, ownProps:PlayerResourceSupplyOwnProps):PlayerResourceSupplyProps {
  if (state.gameState) {
    const playerHand = state.gameState.playerState[ownProps.playerIndex].hand;

    return {
      factoryCount: playerHand.factories.filter(f => f.color === ownProps.resource).length,
      resourceCount: playerHand.resources.filter(r => r === ownProps.resource).length
    };
  } else {
    return {
      factoryCount: 0,
      resourceCount: 0
    };
  }
}

const PlayerResourceSupplyComponent = connect(mapStateToProps)(PlayerResourceSupply);

export default PlayerResourceSupplyComponent;
