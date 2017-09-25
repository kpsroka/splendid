// @flow

import { connect } from 'react-redux';
import ResourceBox from './ResourceBox.js';

import type { ResourceBoxOwnProps, ResourceBoxProps } from './ResourceBox.js';
import type { State } from '../../model/State.js';

function mapStateToProps(state:State, ownProps:ResourceBoxOwnProps):ResourceBoxProps {
  if (!state.gameState) {
    throw Error("No board state present.");
  }

  let playerHand = state.gameState.playerState[0].hand;
  let resourceAvailable =
      playerHand.factories.reduce((acc, next) => ((next.color === ownProps.resource) ? acc + 1 : acc), 0)
      + playerHand.resources.filter(resource => resource === ownProps.resource).length;

  return {
    available: resourceAvailable >= ownProps.count
  }
}

const ResourceBoxComponent = connect(mapStateToProps)(ResourceBox);

export default ResourceBoxComponent;
