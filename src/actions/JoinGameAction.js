import AwaitGameReady from './AwaitGameReadyAction.js';
import SetUiMessage from './SetUiMessageAction.js';
import CheckResponse from './async/CheckResponse.js';
import JoinGameRequest from './async/JoinGame.js';

export default function JoinGame(playerName, gameRefId) {
  return (dispatch) => {
    dispatch(SetUiMessage('Joining game ' + gameRefId));

    CheckResponse(JoinGameRequest(playerName, gameRefId))
    .then(
        gameConfig => {
          dispatch(AwaitGameReady(gameConfig.ref))
        })
    .catch(
        error => {
          dispatch(SetUiMessage(error.message, 'ERROR'));
        }
    );
  }
}
