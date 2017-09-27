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
import Factory from './Factory.js';
import ChooseFactoryFromBoardAction from '../../actions/ChooseFactoryFromBoardAction.js';
import { ReduceResources } from '../../model/ResourceHelper.js';

import type { FactoryProps, FactoryOwnProps, FactoryDispatch } from './Factory.js';
import type { State } from '../../model/State.js';

function mapStateToProps(state:State, ownProps:FactoryOwnProps):FactoryProps {
  if (!state.gameState) {
    throw Error("No board state present.");
  }

  let boardState = state.gameState.board;
  let resourceFactory = boardState.factoriesByRow[ownProps.rowIndex][ownProps.itemIndex];

  let costColors = ReduceResources(resourceFactory.cost);

  let selection = boardState.selection.type === 'FACTORY_SELECTION' ? boardState.selection : null;

  return {
    resource: resourceFactory.color,
    costColors: costColors,
    points: resourceFactory.points,
    selected: selection !== null &&
        selection.row === ownProps.rowIndex &&
        selection.item === ownProps.itemIndex
  }
}

function mapDispatchToProps(dispatch, ownProps:FactoryOwnProps):FactoryDispatch {
  return {
    onFactoryClick: () =>
        dispatch(ChooseFactoryFromBoardAction(ownProps.rowIndex, ownProps.itemIndex))
  }
}

const FactoryComponent = connect(mapStateToProps, mapDispatchToProps)(Factory);

export default FactoryComponent;
