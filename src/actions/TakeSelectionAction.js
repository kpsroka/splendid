import SetGameState from './SetGameStateAction.js';
import SetUiMessage from './SetUiMessageAction.js';
import { TakeResources, TakeFactory } from './async/ExecutePlayerAction.js';
import CheckResponse from './async/CheckResponse.js';

export default function TakeSelectionAction() {
  return (dispatch, getState) => {
    let state = getState();

    let selection = state.gameState.board.selection;
    if (selection.type === 'RESOURCE_SELECTION') {
      runAction(
          dispatch,
          TakeResources(state.gameRef, selection.selection.join()));
    } else if (selection.type === 'FACTORY_SELECTION') {
      runAction(
          dispatch,
          TakeFactory(state.gameRef, selection.row, selection.item)
      );
    } else {
      dispatch(SetUiMessage("Wrong selection", 'ERROR'));
    }
  }
}

function runAction(dispatch, actionPromise) {
  CheckResponse(actionPromise)
  .then(
      gameState => {
        dispatch(SetGameState(gameState));
      }
  )
  .catch(
      error => {
        dispatch(SetUiMessage(error.message, 'ERROR'));
      }
  );
}
