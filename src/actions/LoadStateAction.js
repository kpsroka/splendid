import GetGameData from './GetGameDataAction.js';
import SetUiMode from './SetUiModeAction.js';

const SESSION_STORAGE_KEY = 'gameref';

export default function LoadStateAction() {
  return (dispatch) => {
    let hashGameId = location.hash.slice(1);

    let sessionGameRefStr = sessionStorage.getItem(SESSION_STORAGE_KEY);
    let sessionGameRef =
        sessionGameRefStr === null ? undefined : JSON.parse(sessionGameRefStr);

    if (sessionGameRef === undefined && hashGameId === '') {
      dispatch(SetUiMode('WELCOME'));
    } else if (sessionGameRef === undefined && hashGameId !== '') {
      dispatch(SetUiMode('JOIN'));
    } else if (sessionGameRef !== undefined
        && (hashGameId === '' || hashGameId === sessionGameRef.id)) {
      dispatch(GetGameData(sessionGameRef));
    } else {
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
      dispatch(SetUiMode('JOIN'));
    }
  };
}