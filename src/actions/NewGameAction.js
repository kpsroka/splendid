import SetUiMessage from './SetUiMessageAction.js';
import CheckResponse from './async/CheckResponse.js';
import CreateGame from './async/CreateGame.js';
import FetchGameConfig from './async/FetchGameConfig.js';

export default function NewGame(playerName, playerCount) {
  return (dispatch) => {
    dispatch(SetUiMessage('Starting new game'));

    CheckResponse(CreateGame(playerName, playerCount))
    .then(
        gameRef => {
          dispatch(SetUiMessage(`Created new game (${gameRef.id})`));
          return CheckResponse(FetchGameConfig(gameRef.id));
        })
    .then(gameConfig => { console.log(gameConfig); })
    .catch(
        error => {
          dispatch(SetUiMessage(error.message, 'ERROR'));
        }
    );
  }
}
