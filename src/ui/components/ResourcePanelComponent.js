import { connect } from 'react-redux';
import ResourcePanel from '../react/board/ResourcePanel.js';
import ChooseResourceFromStackAction from '../../actions/ChooseResourceFromStackAction.js';

function mapStateToProps(state) {
  if (!state.gameState) {
    return { resources: {} }
  }

  let resources = state.gameState.board.resources.sort().reduce(
      (combinedCost, nextCost) => {
        combinedCost[nextCost] = combinedCost.hasOwnProperty(nextCost) ? (combinedCost[nextCost] + 1) : 1;
        return combinedCost;
      },
      {});

  return { resources: resources }
}

function mapDispatchToProps(dispatch) {
  return {
    onStackClick: (resourceType) => dispatch(ChooseResourceFromStackAction(resourceType))
  }
}

const ResourcePanelComponent = connect(mapStateToProps, mapDispatchToProps)(ResourcePanel);

export default ResourcePanelComponent;
