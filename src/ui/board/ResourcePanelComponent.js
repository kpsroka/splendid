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
