import { ActionTypes } from '../../actions/Actions.js';

export default function UiStateReducer(ui, action) {
  switch (action.type) {
    case ActionTypes.SetUiMessage: {
      let newMessage = {
        text: action.text,
        severity: action.severity
      };

      return { ...ui, message: newMessage };
    }
    case ActionTypes.DismissMessage: {
      return { ...ui, message: null };
    }
    default:
      return ui;
  }
}
