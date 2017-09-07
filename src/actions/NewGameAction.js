import AwaitGameReady from "./AwaitGameReadyAction.js";
import SetUiMessage from "./SetUiMessageAction.js";
import CheckResponse from "./async/CheckResponse.js";
import CreateGame from "./async/CreateGame.js";

export default function NewGame(playerName, playerCount) {
  return (dispatch) => {
    dispatch(SetUiMessage('Starting new game'));

    CheckResponse(CreateGame(playerName, playerCount))
    .then(
        gameRef => {
          dispatch(SetUiMessage(`Created new game (${gameRef.gameId})`));
          dispatch(AwaitGameReady(gameRef));
        })
    .catch(
        error => {
          dispatch(SetUiMessage(error.message, 'ERROR'));
        }
    );
  }
}
