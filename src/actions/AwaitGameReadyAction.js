import SetUiMessage from './SetUiMessageAction.js';
import GetGameData from './GetGameDataAction.js';
import CheckResponse from './async/CheckResponse.js';
import FetchGameStatus from './async/FetchGameStatus.js';

const STATUS_POLL_INTERVAL_MILLIS = 2500;

export default function AwaitGameReady(gameRef) {
  return (dispatch) => {
    dispatch(SetUiMessage(`Waiting for game ${gameRef.gameId} to be ready`));

    location.hash = `#${gameRef.gameId}`;

    let gameUnderway = false;
    let intervalId = setInterval(() => {
      CheckResponse(FetchGameStatus(gameRef.gameId))
      .then(
          gameStatus => {
            if (gameUnderway) {
              // Prevent late response from coming in.
              return;
            }

            if (gameStatus.gameStatus === "UNDERWAY") {
              gameUnderway = true;
              clearInterval(intervalId);

              dispatch(GetGameData(gameRef));
            }
          }
      );
    },
    STATUS_POLL_INTERVAL_MILLIS)
  };
}
