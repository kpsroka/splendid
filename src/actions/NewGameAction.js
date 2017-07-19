import SetUiMessage from './SetUiMessageAction.js';
import CreateGame from './async/CreateGame.js';

export default function NewGame(playerName, playerCount) {
  return (dispatch) => {
    dispatch(SetUiMessage('Starting new game'));

    CreateGame(playerName, playerCount)
    .then(
        response => {
          if (response.ok) {
            return response.json();
          } else {
            return response.json().then(errorResponse => {
              throw new Error(`Failed to create new game: ${errorResponse.message}`);
            })
          }
        },
        () => { throw new Error('Network failure'); })
    .then(
        () => {
          dispatch(SetUiMessage('Created new game'));
        })
    .catch(
        error => {
          dispatch(SetUiMessage(error.message, 'ERROR'));
        }
    );
  }
}
