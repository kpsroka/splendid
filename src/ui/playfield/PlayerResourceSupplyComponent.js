import { connect } from 'react-redux';
import PlayerResourceSupply from './PlayerResourceSupply.js';

function mapStateToProps(state, ownProps) {
  if (state.gameState) {
    let playerHand = state.gameState.playerState[ownProps.playerIndex].hand;

    return {
      factoryCount: playerHand.factories.filter(f => f.color === ownProps.resource).length,
      resourceCount: playerHand.resources.filter(r => r === ownProps.resource).length
    }
  } else {
    return {
      factoryCount: 0,
      resourceCount: 0
    }
  }
}

const PlayerResourceSupplyComponent = connect(mapStateToProps)(PlayerResourceSupply);

export default PlayerResourceSupplyComponent;
