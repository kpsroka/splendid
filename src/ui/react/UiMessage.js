import React from 'react';
import './UiMessage.css';

export default function UiMessage(props) {
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
          <div className="UiMessage-dismiss">×</div>
        </div>
      </div>
  );
}
