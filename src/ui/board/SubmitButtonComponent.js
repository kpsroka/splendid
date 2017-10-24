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
import SubmitButton from './SubmitButton.js';
import TakeSelectionAction from '../../actions/async/TakeSelectionAction.js';
import { ContainsResources, ReduceResources } from '../../model/ResourceHelper.js';

import type { State } from '../../model/State.js';
import type { SubmitButtonProps, SubmitButtonDispatch } from './SubmitButton.js';

function mapStateToProps(state:State):SubmitButtonProps {
  return {
    text: "Take",
    active: canTakeResources(state) || canTakeFactory(state),
    styleName: "",
  }
}

function canTakeResources(state:State):boolean {
  if (!state.gameState || state.gameState.gameStatus !== 'UNDERWAY') {
    return false;
  }

  let board = state.gameState.board;
  let selection = board.selection.type === 'RESOURCE_SELECTION'
      ? ReduceResources(board.selection.selection)
      : {};

  return board.selection.type === 'RESOURCE_SELECTION' &&
      (board.selection.selection.length === 3 ||
      (board.selection.selection.length === 2 && Object.getOwnPropertyNames(selection).length === 1));
}

function canTakeFactory(state:State):boolean {
  if (!state.gameState || state.gameState.gameStatus !== 'UNDERWAY') {
    return false;
  }

  let board = state.gameState.board;
  let selection = board.selection;

  if (selection.type === 'FACTORY_SELECTION') {
    let playerHand = state.gameState.playerState[0].hand;
    let factory = board.factoriesByRow[selection.row][selection.item];

    let totalResources =
        playerHand.resources.concat(playerHand.factories.map(f => f.color));
    return ContainsResources(totalResources, factory.cost);
  }

  return false;
}


function mapDispatchToProps(dispatch):SubmitButtonDispatch {
  return {
    onClick: () => dispatch(TakeSelectionAction())
  }
}

const SubmitButtonComponent = connect(mapStateToProps, mapDispatchToProps)(SubmitButton);

export default SubmitButtonComponent;
