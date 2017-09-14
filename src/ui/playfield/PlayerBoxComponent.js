import { connect } from 'react-redux';
import PlayerBox from './PlayerBox.js';

function mapStateToProps(state, ownProps) {
  if (state.players.length <= ownProps.playerIndex) {
    return { disabled: true };
  } else {
    return {
      disabled: false,
      name: state.players[ownProps.playerIndex].name,
      score: 0
    };
  }
}

const PlayerBoxComponent = connect(mapStateToProps)(PlayerBox);

export default PlayerBoxComponent;
