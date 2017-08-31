import SetGameState from './SetGameStateAction.js';
import SetUiMessage from './SetUiMessageAction.js';
import { TakeResources } from './async/ExecutePlayerAction.js';
import CheckResponse from './async/CheckResponse.js';

export default function TakeResourcesFromStackAction() {
  return (dispatch, getState) => {
    let state = getState();

    let selection = state.gameState.board.selection;
    if (selection.type === 'RESOURCE_SELECTION') {
      CheckResponse(
          TakeResources(
              state.gameRef,
              state.gameState.board.selection.selection.join()))
      .then(
          gameState => { dispatch(SetGameState(gameState)); }
      )
      .catch(
          error => {
            dispatch(SetUiMessage(error.message, 'ERROR'));
          }
      );
    } else {
      dispatch(SetUiMessage("Wrong selection", 'ERROR'));
    }
  }
}
