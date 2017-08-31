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

    let gameRefId;

    CheckResponse(CreateGame(playerName, playerCount))
    .then(
        gameRef => {
          dispatch(SetUiMessage(`Created new game (${gameRef.gameId})`));
          gameRefId = gameRef.gameId;
          return CheckResponse(FetchGameConfig(gameRef.gameId));
        })
    .then(gameConfig => {
      dispatch(SetGameConfig(gameConfig));
      return CheckResponse(FetchGameState(gameRefId));
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
