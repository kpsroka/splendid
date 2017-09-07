import SetUiMessage from './SetUiMessageAction.js';
import SetGameState from './SetGameStateAction.js';
import CheckResponse from './async/CheckResponse.js';
import FetchGameState from './async/FetchGameState.js';

const POLL_GAME_STATE_INTERVAL_MILLIS = 1500;

export default function PollGameState(gameRef) {
  return (dispatch) => {
    CheckResponse(FetchGameState(gameRef))
    .then(
        gameState => {
          dispatch(SetGameState(gameState));
          if (gameState.gameStatus === 'UNDERWAY') {
            setTimeout(
                () => { dispatch(PollGameState(gameRef)); },
                POLL_GAME_STATE_INTERVAL_MILLIS);
          } else if (gameState.gameStatus === 'FINISHED') {
            dispatch(SetUiMessage('Game finished!'));
          }
        }
    ).catch(
        error => {
          dispatch(SetUiMessage(error.message, 'ERROR'));
        }
    );
  };
}
