export default function UiStateReducer(state, action) {
  switch (action.type) {
    case '_SET_UI_MESSAGE': {
      let newMessage = {
        text: action.text,
        severity: action.severity
      };

      let newState = Object.assign({}, state);
      newState.ui.message = newMessage;
      return newState;
    }
  }

  return state;
}