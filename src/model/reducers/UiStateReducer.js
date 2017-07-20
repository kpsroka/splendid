import { ActionTypes } from '../../actions/Actions.js';

export default function UiStateReducer(state, action) {
  switch (action.type) {
    case ActionTypes.SetUiMessage: {
      let newMessage = {
        text: action.text,
        severity: action.severity
      };

      let newState = Object.assign({}, state);
      newState.ui.message = newMessage;
      return newState;
    }
    case ActionTypes.DismissMessage: {
      let newState = Object.assign({}, state);
      newState.ui.message = null;
      return newState;
    }
    default:
      return state;
  }
}
