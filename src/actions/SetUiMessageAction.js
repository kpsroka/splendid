import { ActionTypes } from './Actions.js';

export default function SetUiMessage(text, severity='INFO') {
  return {
    type: ActionTypes.SetUiMessage,
    text: text,
    severity: severity
  };
}
