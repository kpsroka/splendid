import SetUiMessage from './SetUiMessageAction.js';
import SetGameState from './SetGameStateAction.js';
import CheckResponse from './async/CheckResponse.js';
import FetchGameState from './async/FetchGameState.js';

const POLL_GAME_STATE_INTERVAL_MILLIS = 1500;

// TODO: Remove duplicate definition (see LoadStateAction.js).
const SESSION_STORAGE_KEY = 'gameref';

export default function PollGameState(gameRef, lastRound=-1) {
  return (dispatch) => {
    CheckResponse(FetchGameState(gameRef, lastRound), false)
    .then(
        gameState => {
          if (gameState === "") {
            setTimeout(
                () => {
                  dispatch(PollGameState(gameRef, lastRound));
                },
                POLL_GAME_STATE_INTERVAL_MILLIS);
          } else {
            sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(gameRef));

            dispatch(SetGameState(gameState));
            if (gameState.gameStatus === 'UNDERWAY') {
              setTimeout(
                  () => {
                    dispatch(PollGameState(gameRef, gameState.round));
                  },
                  POLL_GAME_STATE_INTERVAL_MILLIS);
            } else if (gameState.gameStatus === 'FINISHED') {
              dispatch(SetUiMessage('Game finished!'));
            }
          }
        }
    ).catch(
        error => {
          dispatch(SetUiMessage(error.message, 'ERROR'));
        }
    );
  };
}
