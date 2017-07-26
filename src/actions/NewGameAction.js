import SetUiMessage from './SetUiMessageAction.js';
import SetGameConfig from './SetGameConfigAction.js';
import SetGameState from './SetGameStateAction.js';
import CheckResponse from './async/CheckResponse.js';
import CreateGame from './async/CreateGame.js';
import FetchGameConfig from './async/FetchGameConfig.js';
import FetchGameState from './async/FetchGameState.js';

export default function NewGame(playerName, playerCount) {
  return (dispatch) => {
    dispatch(SetUiMessage('Starting new game'));

    CheckResponse(CreateGame(playerName, playerCount))
    .then(
        gameRef => {
          dispatch(SetUiMessage(`Created new game (${gameRef.id})`));
          return CheckResponse(FetchGameConfig(gameRef.id));
        })
    .then(gameConfig => {
      dispatch(SetGameConfig(gameConfig));
      return CheckResponse(FetchGameState(""));
    })
    .then(gameState => {
      console.log("Game state: " + JSON.stringify(gameState));
      dispatch(SetGameState(gameState));
    })
    .catch(
        error => {
          dispatch(SetUiMessage(error.message, 'ERROR'));
        }
    );
  }
}
