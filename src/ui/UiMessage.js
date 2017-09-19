// @flow

import React from 'react';
import './UiMessage.css';

import type { UiMessage as StateUiMessage } from '../model/State.js';

export type UiMessageProps = {|
  message: ?StateUiMessage,
|};

export type UiMessageDispatch = {|
  onDismissMessage: () => any,
|};

type UiMessageCombinedProps = UiMessageProps & UiMessageDispatch;

export default function UiMessage(props:UiMessageCombinedProps) {
  let messageClassName = 'UiMessage-hidden';
  if (props.message) {
    if (props.message.severity === 'ERROR') {
      messageClassName = 'UiMessage-severityError';
    } else {
      messageClassName = 'UiMessage-severityInfo';
    }
  }

  let text = props.message ? props.message.text : '';

  return (
      <div className="UiMessage-container">
        <div className={`UiMessage-message ${messageClassName}`}>
          <div className="UiMessage-text">{text}</div>
          <div className="UiMessage-dismiss"
              onClick={() => props.onDismissMessage()}>×</div>
        </div>
      </div>
  );
}
