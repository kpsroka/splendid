import PollGameState from './PollGameStateAction.js';
import SetUiMessage from './SetUiMessageAction.js';
import SetGameConfig from './SetGameConfigAction.js';
import SetGameState from './SetGameStateAction.js';
import CheckResponse from './async/CheckResponse.js';
import FetchGameConfig from './async/FetchGameConfig.js';

export default function GetGameData(gameRef) {
  return (dispatch) => {
    dispatch(SetUiMessage(`Joining game ${gameRef.gameId}`));

    CheckResponse(FetchGameConfig(gameRef))
    .then(
        gameConfig => {
          dispatch(SetGameConfig(gameConfig));
          dispatch(PollGameState(gameRef));
        })
    .then(gameState => {
      dispatch(SetGameState(gameState));
    })
    .catch(
        error => {
          dispatch(SetUiMessage(error.message, 'ERROR'));
        }
    );
  }
}