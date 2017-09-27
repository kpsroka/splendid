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
import ResourcePanel from './ResourcePanel.js';
import ChooseResourceFromStackAction from '../../actions/ChooseResourceFromStackAction.js';
import { ReduceResources } from '../../model/ResourceHelper.js';

import type { State, Resource } from '../../model/State.js';
import type { ResourcePanelProps, ResourcePanelDispatch } from './ResourcePanel.js';

function mapStateToProps(state:State):ResourcePanelProps {
  if (!state.gameState) {
    return { resources: {}, selection: {} }
  }

  let board = state.gameState.board;
  let resources = ReduceResources(board.resources);
  let selection = board.selection.type === 'RESOURCE_SELECTION'
      ? ReduceResources(board.selection.selection)
      : {};

  return {
    resources: resources,
    selection: selection,
  };
}

function mapDispatchToProps(dispatch):ResourcePanelDispatch {
  return {
    onStackClick: (resourceType:Resource) => dispatch(ChooseResourceFromStackAction(resourceType)),
  }
}

const ResourcePanelComponent = connect(mapStateToProps, mapDispatchToProps)(ResourcePanel);

export default ResourcePanelComponent;
