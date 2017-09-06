import SetUiMessage from './SetUiMessageAction.js';
import SetGameConfig from './SetGameConfigAction.js';
import SetGameState from './SetGameStateAction.js';
import CheckResponse from './async/CheckResponse.js';
import JoinGameRequest from './async/JoinGame.js';
import FetchGameState from './async/FetchGameState.js';

export default function JoinGame(playerName, gameRefId) {
  return (dispatch) => {
    dispatch(SetUiMessage('Joining game ' + gameRefId));

    CheckResponse(JoinGameRequest(playerName, gameRefId))
    .then(
        gameConfig => {
          dispatch(SetUiMessage(`Joined game (${gameRefId})`));
          dispatch(SetGameConfig(gameConfig));
          return CheckResponse(FetchGameState(gameConfig.ref));
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
